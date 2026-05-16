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

export const AwsS3BucketRequestPaymentConfigurationInputSchema = TfMetaSchema
  .extend({
    bucket: resolvableValue(z.string()),
    payer: resolvableValue(z.string()),
    expected_bucket_owner: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsS3BucketRequestPaymentConfigurationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsS3BucketRequestPaymentConfigurationInputProps =
  & z.input<typeof AwsS3BucketRequestPaymentConfigurationInputSchema>
  & NodeProps

export type AwsS3BucketRequestPaymentConfigurationOutputProps =
  & z.output<typeof AwsS3BucketRequestPaymentConfigurationOutputSchema>
  & z.output<typeof AwsS3BucketRequestPaymentConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_request_payment_configuration

export function AwsS3BucketRequestPaymentConfiguration(
  props: Partial<AwsS3BucketRequestPaymentConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_request_payment_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketRequestPaymentConfigurationInputSchema}
      _outputSchema={AwsS3BucketRequestPaymentConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketRequestPaymentConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3BucketRequestPaymentConfigurationOutputProps>(
    AwsS3BucketRequestPaymentConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketRequestPaymentConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketRequestPaymentConfigurationOutputProps>(
    AwsS3BucketRequestPaymentConfiguration,
    idFilter,
    baseNode,
    optional,
  )
