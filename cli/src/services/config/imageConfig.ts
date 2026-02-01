import { z } from 'zod'
import { dinghyAppConfig } from '../../utils/loadConfig.ts'

const RunsSchema = z.object({
  runs: z.array(z.string()).optional(),
})

const TfSchema = RunsSchema.extend({
  vendor: z.enum(['terraform', 'opentofu']).default('terraform'),
  version: z.string().optional(),
  providers: z.record(z.string(), z.string()).optional(),
})

const PackagesSchema = RunsSchema.extend({
  packages: z.string().array().optional(),
})

const schemaMap = {
  drawio: RunsSchema,
  site: PackagesSchema,
  awscli: RunsSchema,
  tf: TfSchema,
  engine: PackagesSchema,
}

export const imageCustomization = (name: string) => {
  const config = dinghyAppConfig.docker?.images?.[name]
  if (config) {
    return schemaMap[name as keyof typeof schemaMap]?.parse(config)
  }
}
