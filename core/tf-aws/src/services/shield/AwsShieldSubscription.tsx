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

export const AwsShieldSubscriptionInputSchema = TfMetaSchema.extend({
  auto_renew: resolvableValue(z.string().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
})

export const AwsShieldSubscriptionOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsShieldSubscriptionInputProps =
  & z.input<typeof AwsShieldSubscriptionInputSchema>
  & NodeProps

export type AwsShieldSubscriptionOutputProps =
  & z.output<typeof AwsShieldSubscriptionOutputSchema>
  & z.output<typeof AwsShieldSubscriptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/shield_subscription

export function AwsShieldSubscription(
  props: Partial<AwsShieldSubscriptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_shield_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={AwsShieldSubscriptionInputSchema}
      _outputSchema={AwsShieldSubscriptionOutputSchema}
      {...props}
    />
  )
}

export const useAwsShieldSubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsShieldSubscriptionOutputProps>(
    AwsShieldSubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsShieldSubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsShieldSubscriptionOutputProps>(
    AwsShieldSubscription,
    idFilter,
    baseNode,
    optional,
  )
