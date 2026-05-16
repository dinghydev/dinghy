import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsSesv2AccountSuppressionAttributesInputSchema = TfMetaSchema
  .extend({
    suppressed_reasons: resolvableValue(z.string().array()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsSesv2AccountSuppressionAttributesOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsSesv2AccountSuppressionAttributesInputProps =
  & z.input<typeof AwsSesv2AccountSuppressionAttributesInputSchema>
  & NodeProps

export type AwsSesv2AccountSuppressionAttributesOutputProps =
  & z.output<typeof AwsSesv2AccountSuppressionAttributesOutputSchema>
  & z.output<typeof AwsSesv2AccountSuppressionAttributesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_account_suppression_attributes

export function AwsSesv2AccountSuppressionAttributes(
  props: Partial<AwsSesv2AccountSuppressionAttributesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_account_suppression_attributes'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesv2AccountSuppressionAttributesInputSchema}
      _outputSchema={AwsSesv2AccountSuppressionAttributesOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2AccountSuppressionAttributess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesv2AccountSuppressionAttributesOutputProps>(
    AwsSesv2AccountSuppressionAttributes,
    idFilter,
    baseNode,
    optional,
  )
