import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVerifiedpermissionsPolicyStore } from './AwsVerifiedpermissionsPolicyStore.tsx'

export const InputSchema = z.object({
  description: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  deletion_protection: z.string().optional(),
  last_updated_date: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  validation_settings: z.object({
    mode: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/verifiedpermissions_policy_store

export function DataAwsVerifiedpermissionsPolicyStore(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsVerifiedpermissionsPolicyStore
      _type='aws_verifiedpermissions_policy_store'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVerifiedpermissionsPolicyStore = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsVerifiedpermissionsPolicyStore,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsVerifiedpermissionsPolicyStores = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsVerifiedpermissionsPolicyStore,
    idFilter,
    baseNode,
    optional,
  )
