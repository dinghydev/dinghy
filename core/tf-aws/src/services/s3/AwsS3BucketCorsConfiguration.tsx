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

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export const ImportSchema = z.object({
  bucket: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  expected_bucket_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_bucket_cors_configuration

export function AwsS3BucketCorsConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_cors_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketCorsConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsS3BucketCorsConfiguration,
    idFilter,
    baseNode,
    optional,
  )
