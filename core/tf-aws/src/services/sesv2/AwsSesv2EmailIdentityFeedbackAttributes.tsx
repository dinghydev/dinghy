import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsSesv2EmailIdentityFeedbackAttributesInputSchema = TfMetaSchema
  .extend({
    email_identity: resolvableValue(z.string()),
    email_forwarding_enabled: resolvableValue(z.boolean().optional()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsSesv2EmailIdentityFeedbackAttributesOutputSchema = z.object({})

export type AwsSesv2EmailIdentityFeedbackAttributesInputProps =
  & z.input<typeof AwsSesv2EmailIdentityFeedbackAttributesInputSchema>
  & NodeProps

export type AwsSesv2EmailIdentityFeedbackAttributesOutputProps =
  & z.output<typeof AwsSesv2EmailIdentityFeedbackAttributesOutputSchema>
  & z.output<typeof AwsSesv2EmailIdentityFeedbackAttributesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_email_identity_feedback_attributes

export function AwsSesv2EmailIdentityFeedbackAttributes(
  props: Partial<AwsSesv2EmailIdentityFeedbackAttributesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_email_identity_feedback_attributes'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesv2EmailIdentityFeedbackAttributesInputSchema}
      _outputSchema={AwsSesv2EmailIdentityFeedbackAttributesOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2EmailIdentityFeedbackAttributess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesv2EmailIdentityFeedbackAttributesOutputProps>(
    AwsSesv2EmailIdentityFeedbackAttributes,
    idFilter,
    baseNode,
    optional,
  )
