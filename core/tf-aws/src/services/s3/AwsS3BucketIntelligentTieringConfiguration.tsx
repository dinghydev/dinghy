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

export const AwsS3BucketIntelligentTieringConfigurationInputSchema =
  TfMetaSchema.extend({
    bucket: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    tiering: resolvableValue(
      z.object({
        access_tier: z.string(),
        days: z.number(),
      }).array(),
    ),
    filter: resolvableValue(
      z.object({
        prefix: z.string().optional(),
        tags: z.record(z.string(), z.string()).optional(),
      }).optional(),
    ),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    status: resolvableValue(z.string().optional()),
  })

export const AwsS3BucketIntelligentTieringConfigurationOutputSchema = z.object(
  {},
)

export type AwsS3BucketIntelligentTieringConfigurationInputProps =
  & z.input<typeof AwsS3BucketIntelligentTieringConfigurationInputSchema>
  & NodeProps

export type AwsS3BucketIntelligentTieringConfigurationOutputProps =
  & z.output<typeof AwsS3BucketIntelligentTieringConfigurationOutputSchema>
  & z.output<typeof AwsS3BucketIntelligentTieringConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_intelligent_tiering_configuration

export function AwsS3BucketIntelligentTieringConfiguration(
  props: Partial<AwsS3BucketIntelligentTieringConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_intelligent_tiering_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketIntelligentTieringConfigurationInputSchema}
      _outputSchema={AwsS3BucketIntelligentTieringConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketIntelligentTieringConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3BucketIntelligentTieringConfigurationOutputProps>(
    AwsS3BucketIntelligentTieringConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketIntelligentTieringConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketIntelligentTieringConfigurationOutputProps>(
    AwsS3BucketIntelligentTieringConfiguration,
    idFilter,
    baseNode,
    optional,
  )
