import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsSesv2EmailIdentityMailFromAttributesInputSchema = TfMetaSchema
  .extend({
    email_identity: resolvableValue(z.string()),
    behavior_on_mx_failure: resolvableValue(z.string().optional()),
    id: resolvableValue(z.string().optional()),
    mail_from_domain: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsSesv2EmailIdentityMailFromAttributesOutputSchema = z.object({})

export type AwsSesv2EmailIdentityMailFromAttributesInputProps =
  & z.input<typeof AwsSesv2EmailIdentityMailFromAttributesInputSchema>
  & NodeProps

export type AwsSesv2EmailIdentityMailFromAttributesOutputProps =
  & z.output<typeof AwsSesv2EmailIdentityMailFromAttributesOutputSchema>
  & z.output<typeof AwsSesv2EmailIdentityMailFromAttributesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_email_identity_mail_from_attributes

export function AwsSesv2EmailIdentityMailFromAttributes(
  props: Partial<AwsSesv2EmailIdentityMailFromAttributesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_email_identity_mail_from_attributes'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesv2EmailIdentityMailFromAttributesInputSchema}
      _outputSchema={AwsSesv2EmailIdentityMailFromAttributesOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2EmailIdentityMailFromAttributess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesv2EmailIdentityMailFromAttributesOutputProps>(
    AwsSesv2EmailIdentityMailFromAttributes,
    idFilter,
    baseNode,
    optional,
  )
