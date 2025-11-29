import {
  camelCaseToWords,
  type NodeProps,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamAccountAlias } from './AwsIamAccountAlias.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/iam_account_alias

export const InputSchema = z.object({})

export const OutputSchema = z.object({
  account_alias: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsIamAccountAlias(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsIamAccountAlias
      _type='aws_iam_account_alias'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamAccountAliass = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsIamAccountAlias, node, id)
