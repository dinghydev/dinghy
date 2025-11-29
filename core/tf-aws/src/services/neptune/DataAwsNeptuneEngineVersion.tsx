import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/neptune_engine_version

export const InputSchema = z.object({
  default_only: resolvableValue(z.boolean().optional()),
  engine: resolvableValue(z.string().optional()),
  has_major_target: resolvableValue(z.boolean().optional()),
  has_minor_target: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  latest: resolvableValue(z.boolean().optional()),
  parameter_group_family: resolvableValue(z.string().optional()),
  preferred_major_targets: resolvableValue(z.string().array().optional()),
  preferred_upgrade_targets: resolvableValue(z.string().array().optional()),
  preferred_versions: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  version: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  default_character_set: z.string().optional(),
  engine_description: z.string().optional(),
  exportable_log_types: z.string().array().optional(),
  supported_character_sets: z.string().array().optional(),
  supported_timezones: z.string().array().optional(),
  supports_global_databases: z.boolean().optional(),
  supports_log_exports_to_cloudwatch: z.boolean().optional(),
  supports_read_replica: z.boolean().optional(),
  valid_major_targets: z.string().array().optional(),
  valid_minor_targets: z.string().array().optional(),
  valid_upgrade_targets: z.string().array().optional(),
  version_actual: z.string().optional(),
  version_description: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsNeptuneEngineVersion(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_neptune_engine_version'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsNeptuneEngineVersion = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsNeptuneEngineVersion, node, id)

export const useDataAwsNeptuneEngineVersions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsNeptuneEngineVersion, node, id)
