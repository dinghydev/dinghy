import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsIamAccountAliasInputSchema = TfMetaSchema.extend({
  account_alias: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const AwsIamAccountAliasOutputSchema = z.object({})

export type AwsIamAccountAliasInputProps =
  & z.input<typeof AwsIamAccountAliasInputSchema>
  & NodeProps

export type AwsIamAccountAliasOutputProps =
  & z.output<typeof AwsIamAccountAliasOutputSchema>
  & z.output<typeof AwsIamAccountAliasInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_account_alias

export function AwsIamAccountAlias(
  props: Partial<AwsIamAccountAliasInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_account_alias'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamAccountAliasInputSchema}
      _outputSchema={AwsIamAccountAliasOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamAccountAliass = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamAccountAliasOutputProps>(
    AwsIamAccountAlias,
    idFilter,
    baseNode,
    optional,
  )
