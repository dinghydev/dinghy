import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsSagemakerModelCardInputSchema = TfMetaSchema.extend({
  content: resolvableValue(z.string()),
  model_card_name: resolvableValue(z.string()),
  model_card_status: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  security_config: resolvableValue(
    z.object({
      kms_key_id: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsSagemakerModelCardOutputSchema = z.object({
  model_card_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSagemakerModelCardInputProps =
  & z.input<typeof AwsSagemakerModelCardInputSchema>
  & NodeProps

export type AwsSagemakerModelCardOutputProps =
  & z.output<typeof AwsSagemakerModelCardOutputSchema>
  & z.output<typeof AwsSagemakerModelCardInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_model_card

export function AwsSagemakerModelCard(
  props: Partial<AwsSagemakerModelCardInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_model_card'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerModelCardInputSchema}
      _outputSchema={AwsSagemakerModelCardOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerModelCard = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerModelCardOutputProps>(
    AwsSagemakerModelCard,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerModelCards = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerModelCardOutputProps>(
    AwsSagemakerModelCard,
    idFilter,
    baseNode,
    optional,
  )
