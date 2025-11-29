import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssmincidents_replication_set

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(
    z.object({
      kms_key_arn: z.string().optional(),
      name: z.string(),
      status: z.string(),
      status_message: z.string(),
    }).array().optional(),
  ),
  regions: resolvableValue(
    z.object({
      kms_key_arn: z.string().optional(),
      name: z.string(),
      status: z.string(),
      status_message: z.string(),
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

export function AwsSsmincidentsReplicationSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsSsmincidentsReplicationSet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSsmincidentsReplicationSet, node, id)

export const useAwsSsmincidentsReplicationSets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSsmincidentsReplicationSet, node, id)
