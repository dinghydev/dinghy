import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsPaymentcryptographyKeyAliasInputSchema = TfMetaSchema.extend({
  alias_name: resolvableValue(z.string()),
  key_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsPaymentcryptographyKeyAliasOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsPaymentcryptographyKeyAliasInputProps =
  & z.input<typeof AwsPaymentcryptographyKeyAliasInputSchema>
  & NodeProps

export type AwsPaymentcryptographyKeyAliasOutputProps =
  & z.output<typeof AwsPaymentcryptographyKeyAliasOutputSchema>
  & z.output<typeof AwsPaymentcryptographyKeyAliasInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/paymentcryptography_key_alias

export function AwsPaymentcryptographyKeyAlias(
  props: Partial<AwsPaymentcryptographyKeyAliasInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_paymentcryptography_key_alias'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPaymentcryptographyKeyAliasInputSchema}
      _outputSchema={AwsPaymentcryptographyKeyAliasOutputSchema}
      {...props}
    />
  )
}

export const useAwsPaymentcryptographyKeyAliass = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPaymentcryptographyKeyAliasOutputProps>(
    AwsPaymentcryptographyKeyAlias,
    idFilter,
    baseNode,
    optional,
  )
