import {
  camelCaseToWords,
  type NodeProps,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamAccountAlias } from './AwsIamAccountAlias.tsx'

export const DataAwsIamAccountAliasInputSchema = TfMetaSchema.extend({})

export const DataAwsIamAccountAliasOutputSchema = z.object({
  account_alias: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsIamAccountAliasInputProps =
  & z.input<typeof DataAwsIamAccountAliasInputSchema>
  & NodeProps

export type DataAwsIamAccountAliasOutputProps =
  & z.output<typeof DataAwsIamAccountAliasOutputSchema>
  & z.output<typeof DataAwsIamAccountAliasInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_account_alias

export function DataAwsIamAccountAlias(
  props: Partial<DataAwsIamAccountAliasInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsIamAccountAlias
      _type='aws_iam_account_alias'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamAccountAliasInputSchema}
      _outputSchema={DataAwsIamAccountAliasOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamAccountAliass = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamAccountAliasOutputProps>(
    DataAwsIamAccountAlias,
    idFilter,
    baseNode,
    optional,
  )
