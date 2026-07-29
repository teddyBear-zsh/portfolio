import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const architectureStepSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
});

const hubNodeSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
});

// A project can have more than one pipeline (e.g. receipts-auto has an
// ingestion pipeline and a separate scheduled reporting pipeline). Do not
// force multiple unrelated flows into a single linear diagram.
const architectureLinearSchema = z.object({
  type: z.literal('linear').optional(),
  name: z.string(), // slug-like id, e.g. "ingestion"
  label: z.string(), // display heading, e.g. "Ingestion"
  steps: z.array(architectureStepSchema),
  caption: z.string().optional(),
});

// Hub-and-spoke pipelines (e.g. lazyconvert's PDF/img conversion hubs) don't
// have a linear order — every spoke converts both ways with the center.
const architectureHubSchema = z.object({
  type: z.literal('hub'),
  name: z.string(),
  label: z.string(),
  center: hubNodeSchema,
  spokes: z.array(hubNodeSchema),
  caption: z.string().optional(),
});

const architecturePipelineSchema = z.union([architectureHubSchema, architectureLinearSchema]);

const statSchema = z.object({
  value: z.string(), // e.g. "3s", "95%"
  label: z.string(), // e.g. "per receipt processed"
});

const techTagSchema = z.object({
  name: z.string(), // e.g. "Go"
  icon: z.string(), // icon slug, e.g. "brand-golang" (Tabler) or a Simple Icons slug
});

const sketchSchema = z.object({
  image: z.string(), // path relative to src/assets/{slug}/
  caption: z.string(),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['shipped', 'in-progress', 'archived']),
    plainSummary: z.string(), // one sentence, no jargon
    problem: z.string(),
    solution: z.string(),
    architecture: z.array(architecturePipelineSchema),
    outcomes: z.array(statSchema),
    techStack: z.array(techTagSchema),
    sketches: z.array(sketchSchema).optional(),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
