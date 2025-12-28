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
  error_document: resolvableValue(
    z.object({
      key: z.string(),
    }).optional(),
  ),
  expected_bucket_owner: resolvableValue(z.string().optional()),
  index_document: resolvableValue(
    z.object({
      suffix: z.string(),
    }).optional(),
  ),
  redirect_all_requests_to: resolvableValue(
    z.object({
      host_name: z.string(),
      protocol: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  routing_rule: resolvableValue(
    z.object({
      condition: z.object({
        http_error_code_returned_equals: z.string().optional(),
        key_prefix_equals: z.string().optional(),
      }).optional(),
      redirect: z.object({
        host_name: z.string().optional(),
        http_redirect_code: z.string().optional(),
        protocol: z.string().optional(),
        replace_key_prefix_with: z.string().optional(),
        replace_key_with: z.string().optional(),
      }),
    }).array().optional(),
  ),
  routing_rules: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  website_domain: z.string().optional(),
  website_endpoint: z.string().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_bucket_website_configuration

export function AwsS3BucketWebsiteConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_website_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketWebsiteConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsS3BucketWebsiteConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketWebsiteConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsS3BucketWebsiteConfiguration,
    idFilter,
    baseNode,
    optional,
  )
