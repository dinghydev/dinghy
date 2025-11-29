import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEbsEncryptionByDefault } from './AwsEbsEncryptionByDefault.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ebs_encryption_by_default

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  enabled: z.boolean().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEbsEncryptionByDefault(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEbsEncryptionByDefault
      _type='aws_ebs_encryption_by_default'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEbsEncryptionByDefault = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsEbsEncryptionByDefault, node, id)

export const useDataAwsEbsEncryptionByDefaults = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsEbsEncryptionByDefault, node, id)
