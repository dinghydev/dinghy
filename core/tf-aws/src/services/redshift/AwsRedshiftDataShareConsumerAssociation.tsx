import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/redshift_data_share_consumer_association

export const InputSchema = z.object({
  data_share_arn: resolvableValue(z.string()),
  allow_writes: resolvableValue(z.boolean().optional()),
  associate_entire_account: resolvableValue(z.boolean().optional()),
  consumer_arn: resolvableValue(z.string().optional()),
  consumer_region: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  managed_by: z.string().optional(),
  producer_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRedshiftDataShareConsumerAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_data_share_consumer_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftDataShareConsumerAssociation = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsRedshiftDataShareConsumerAssociation, node, id)

export const useAwsRedshiftDataShareConsumerAssociations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsRedshiftDataShareConsumerAssociation, node, id)
