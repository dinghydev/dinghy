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

export const AwsSecurityhubStandardsSubscriptionInputSchema = TfMetaSchema
  .extend({
    standards_arn: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsSecurityhubStandardsSubscriptionOutputSchema = z.object({
  arn: z.string().optional(),
})

export const AwsSecurityhubStandardsSubscriptionImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsSecurityhubStandardsSubscriptionInputProps =
  & z.input<typeof AwsSecurityhubStandardsSubscriptionInputSchema>
  & z.input<typeof AwsSecurityhubStandardsSubscriptionImportSchema>
  & NodeProps

export type AwsSecurityhubStandardsSubscriptionOutputProps =
  & z.output<typeof AwsSecurityhubStandardsSubscriptionOutputSchema>
  & z.output<typeof AwsSecurityhubStandardsSubscriptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securityhub_standards_subscription

export function AwsSecurityhubStandardsSubscription(
  props: Partial<AwsSecurityhubStandardsSubscriptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_standards_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecurityhubStandardsSubscriptionInputSchema}
      _outputSchema={AwsSecurityhubStandardsSubscriptionOutputSchema}
      _importSchema={AwsSecurityhubStandardsSubscriptionImportSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubStandardsSubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecurityhubStandardsSubscriptionOutputProps>(
    AwsSecurityhubStandardsSubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecurityhubStandardsSubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecurityhubStandardsSubscriptionOutputProps>(
    AwsSecurityhubStandardsSubscription,
    idFilter,
    baseNode,
    optional,
  )
