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

export const AwsKeyspacesKeyspaceInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  replication_specification: resolvableValue(
    z.object({
      region_list: z.string().array().optional(),
      replication_strategy: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsKeyspacesKeyspaceOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsKeyspacesKeyspaceInputProps =
  & z.input<typeof AwsKeyspacesKeyspaceInputSchema>
  & NodeProps

export type AwsKeyspacesKeyspaceOutputProps =
  & z.output<typeof AwsKeyspacesKeyspaceOutputSchema>
  & z.output<typeof AwsKeyspacesKeyspaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace

export function AwsKeyspacesKeyspace(
  props: Partial<AwsKeyspacesKeyspaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_keyspaces_keyspace'
      _category='resource'
      _title={_title}
      _inputSchema={AwsKeyspacesKeyspaceInputSchema}
      _outputSchema={AwsKeyspacesKeyspaceOutputSchema}
      {...props}
    />
  )
}

export const useAwsKeyspacesKeyspace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsKeyspacesKeyspaceOutputProps>(
    AwsKeyspacesKeyspace,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsKeyspacesKeyspaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsKeyspacesKeyspaceOutputProps>(
    AwsKeyspacesKeyspace,
    idFilter,
    baseNode,
    optional,
  )
