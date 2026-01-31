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

const NpmSchema = RunsSchema.extend({
  packages: z.record(z.string(), z.string()).optional(),
})

const schemaMap = {
  drawio: RunsSchema,
  site: NpmSchema,
  awscli: RunsSchema,
  tf: TfSchema,
  release: NpmSchema,
}

export const imageCustomization = (name: string) => {
  const config = dinghyAppConfig.docker?.images?.[name]
  if (config) {
    return schemaMap[name as keyof typeof schemaMap].parse(config)
  }
}
