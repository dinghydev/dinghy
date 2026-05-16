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

export const AwsS3BucketCorsConfigurationInputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  cors_rule: resolvableValue(
    z.object({
      allowed_headers: z.string().array().optional(),
      allowed_methods: z.string().array(),
      allowed_origins: z.string().array(),
      expose_headers: z.string().array().optional(),
      id: z.string().optional(),
      max_age_seconds: z.number().optional(),
    }).array(),
  ),
  expected_bucket_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsS3BucketCorsConfigurationOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsS3BucketCorsConfigurationImportSchema = z.object({
  bucket: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsS3BucketCorsConfigurationInputProps =
  & z.input<typeof AwsS3BucketCorsConfigurationInputSchema>
  & z.input<typeof AwsS3BucketCorsConfigurationImportSchema>
  & NodeProps

export type AwsS3BucketCorsConfigurationOutputProps =
  & z.output<typeof AwsS3BucketCorsConfigurationOutputSchema>
  & z.output<typeof AwsS3BucketCorsConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_cors_configuration

export function AwsS3BucketCorsConfiguration(
  props: Partial<AwsS3BucketCorsConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_cors_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketCorsConfigurationInputSchema}
      _outputSchema={AwsS3BucketCorsConfigurationOutputSchema}
      _importSchema={AwsS3BucketCorsConfigurationImportSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketCorsConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3BucketCorsConfigurationOutputProps>(
    AwsS3BucketCorsConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketCorsConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketCorsConfigurationOutputProps>(
    AwsS3BucketCorsConfiguration,
    idFilter,
    baseNode,
    optional,
  )
