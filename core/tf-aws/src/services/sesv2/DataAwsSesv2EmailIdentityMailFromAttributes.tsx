import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSesv2EmailIdentityMailFromAttributes } from './AwsSesv2EmailIdentityMailFromAttributes.tsx'

export const DataAwsSesv2EmailIdentityMailFromAttributesInputSchema =
  TfMetaSchema.extend({
    email_identity: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsSesv2EmailIdentityMailFromAttributesOutputSchema = z.object(
  {
    behavior_on_mx_failure: z.string().optional(),
    mail_from_domain: z.string().optional(),
  },
)

export type DataAwsSesv2EmailIdentityMailFromAttributesInputProps =
  & z.input<typeof DataAwsSesv2EmailIdentityMailFromAttributesInputSchema>
  & NodeProps

export type DataAwsSesv2EmailIdentityMailFromAttributesOutputProps =
  & z.output<typeof DataAwsSesv2EmailIdentityMailFromAttributesOutputSchema>
  & z.output<typeof DataAwsSesv2EmailIdentityMailFromAttributesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/sesv2_email_identity_mail_from_attributes

export function DataAwsSesv2EmailIdentityMailFromAttributes(
  props: Partial<DataAwsSesv2EmailIdentityMailFromAttributesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSesv2EmailIdentityMailFromAttributes
      _type='aws_sesv2_email_identity_mail_from_attributes'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSesv2EmailIdentityMailFromAttributesInputSchema}
      _outputSchema={DataAwsSesv2EmailIdentityMailFromAttributesOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSesv2EmailIdentityMailFromAttributess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSesv2EmailIdentityMailFromAttributesOutputProps>(
    DataAwsSesv2EmailIdentityMailFromAttributes,
    idFilter,
    baseNode,
    optional,
  )
