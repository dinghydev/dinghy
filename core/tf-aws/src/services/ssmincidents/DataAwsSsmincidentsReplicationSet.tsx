import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSsmincidentsReplicationSet } from './AwsSsmincidentsReplicationSet.tsx'

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_by: z.string().optional(),
  deletion_protected: z.boolean().optional(),
  last_modified_by: z.string().optional(),
  region: z.set(z.object({
    kms_key_arn: z.string(),
    name: z.string(),
    status: z.string(),
    status_message: z.string(),
  })).optional(),
  regions: z.set(z.object({
    kms_key_arn: z.string(),
    name: z.string(),
    status: z.string(),
    status_message: z.string(),
  })).optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ssmincidents_replication_set

export function DataAwsSsmincidentsReplicationSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSsmincidentsReplicationSet
      _type='aws_ssmincidents_replication_set'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsmincidentsReplicationSet = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    DataAwsSsmincidentsReplicationSet,
    idFilter,
    baseNode,
  )

export const useDataAwsSsmincidentsReplicationSets = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    DataAwsSsmincidentsReplicationSet,
    idFilter,
    baseNode,
  )
