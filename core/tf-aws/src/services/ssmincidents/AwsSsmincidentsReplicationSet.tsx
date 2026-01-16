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
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(
    z.object({
      kms_key_arn: z.string().optional(),
      name: z.string(),
      status: z.string().optional(),
      status_message: z.string().optional(),
    }).array().optional(),
  ),
  regions: resolvableValue(
    z.object({
      kms_key_arn: z.string().optional(),
      name: z.string(),
      status: z.string().optional(),
      status_message: z.string().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_by: z.string().optional(),
  deletion_protected: z.boolean().optional(),
  last_modified_by: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ssmincidents_replication_set

export function AwsSsmincidentsReplicationSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssmincidents_replication_set'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSsmincidentsReplicationSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsSsmincidentsReplicationSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmincidentsReplicationSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSsmincidentsReplicationSet,
    idFilter,
    baseNode,
    optional,
  )
