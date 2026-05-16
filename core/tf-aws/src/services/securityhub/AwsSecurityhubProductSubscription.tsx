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

export const AwsSecurityhubProductSubscriptionInputSchema = TfMetaSchema.extend(
  {
    product_arn: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsSecurityhubProductSubscriptionOutputSchema = z.object({
  arn: z.string().optional(),
})

export const AwsSecurityhubProductSubscriptionImportSchema = z.object({
  arn: resolvableValue(z.string()),
  product_arn: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSecurityhubProductSubscriptionInputProps =
  & z.input<typeof AwsSecurityhubProductSubscriptionInputSchema>
  & z.input<typeof AwsSecurityhubProductSubscriptionImportSchema>
  & NodeProps

export type AwsSecurityhubProductSubscriptionOutputProps =
  & z.output<typeof AwsSecurityhubProductSubscriptionOutputSchema>
  & z.output<typeof AwsSecurityhubProductSubscriptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securityhub_product_subscription

export function AwsSecurityhubProductSubscription(
  props: Partial<AwsSecurityhubProductSubscriptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_product_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecurityhubProductSubscriptionInputSchema}
      _outputSchema={AwsSecurityhubProductSubscriptionOutputSchema}
      _importSchema={AwsSecurityhubProductSubscriptionImportSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubProductSubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecurityhubProductSubscriptionOutputProps>(
    AwsSecurityhubProductSubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecurityhubProductSubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecurityhubProductSubscriptionOutputProps>(
    AwsSecurityhubProductSubscription,
    idFilter,
    baseNode,
    optional,
  )
