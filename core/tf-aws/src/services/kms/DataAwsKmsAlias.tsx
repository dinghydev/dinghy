import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKmsAlias } from './AwsKmsAlias.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/kms_alias

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  target_key_arn: z.string().optional(),
  target_key_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsKmsAlias(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsKmsAlias
      _type='aws_kms_alias'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKmsAliass = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsKmsAlias, node, id)
