import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = TfMetaSchema.extend({
  engine: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  parameter_group_family: resolvableValue(z.string().optional()),
  preferred_versions: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  version: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  engine_description: z.string().optional(),
  exportable_log_types: z.set(z.string()).optional(),
  supports_log_exports_to_cloudwatch: z.boolean().optional(),
  valid_upgrade_targets: z.set(z.string()).optional(),
  version_description: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/docdb_engine_version

export function DataAwsDocdbEngineVersion(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsDocdbEngineVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsDocdbEngineVersion,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDocdbEngineVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsDocdbEngineVersion,
    idFilter,
    baseNode,
    optional,
  )
