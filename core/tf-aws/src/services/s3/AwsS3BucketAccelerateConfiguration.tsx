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

export const AwsS3BucketAccelerateConfigurationInputSchema = TfMetaSchema
  .extend({
    bucket: resolvableValue(z.string()),
    status: resolvableValue(z.string()),
    expected_bucket_owner: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsS3BucketAccelerateConfigurationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsS3BucketAccelerateConfigurationInputProps =
  & z.input<typeof AwsS3BucketAccelerateConfigurationInputSchema>
  & NodeProps

export type AwsS3BucketAccelerateConfigurationOutputProps =
  & z.output<typeof AwsS3BucketAccelerateConfigurationOutputSchema>
  & z.output<typeof AwsS3BucketAccelerateConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_accelerate_configuration

export function AwsS3BucketAccelerateConfiguration(
  props: Partial<AwsS3BucketAccelerateConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_accelerate_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketAccelerateConfigurationInputSchema}
      _outputSchema={AwsS3BucketAccelerateConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketAccelerateConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3BucketAccelerateConfigurationOutputProps>(
    AwsS3BucketAccelerateConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketAccelerateConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketAccelerateConfigurationOutputProps>(
    AwsS3BucketAccelerateConfiguration,
    idFilter,
    baseNode,
    optional,
  )
