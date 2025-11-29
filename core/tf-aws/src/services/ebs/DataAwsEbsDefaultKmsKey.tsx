import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEbsDefaultKmsKey } from './AwsEbsDefaultKmsKey.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ebs_default_kms_key

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  key_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEbsDefaultKmsKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEbsDefaultKmsKey
      _type='aws_ebs_default_kms_key'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEbsDefaultKmsKey = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsEbsDefaultKmsKey, node, id)

export const useDataAwsEbsDefaultKmsKeys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsEbsDefaultKmsKey, node, id)
