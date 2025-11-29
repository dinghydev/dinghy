import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/docdb_engine_version

export const InputSchema = z.object({
  engine: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  parameter_group_family: resolvableValue(z.string().optional()),
  preferred_versions: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  version: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  engine_description: z.string().optional(),
  exportable_log_types: z.string().array().optional(),
  supports_log_exports_to_cloudwatch: z.boolean().optional(),
  valid_upgrade_targets: z.string().array().optional(),
  version_description: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsDocdbEngineVersion(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_docdb_engine_version'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsDocdbEngineVersion = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsDocdbEngineVersion, node, id)

export const useDataAwsDocdbEngineVersions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsDocdbEngineVersion, node, id)
