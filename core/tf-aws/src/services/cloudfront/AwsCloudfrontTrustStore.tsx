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
  name: resolvableValue(z.string()),
  ca_certificates_bundle_source: resolvableValue(
    z.object({
      ca_certificates_bundle_s3_location: z.object({
        bucket: z.string(),
        key: z.string(),
        region: z.string(),
        version: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
  number_of_ca_certificates: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store

export function AwsCloudfrontTrustStore(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_trust_store'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontTrustStore = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCloudfrontTrustStore,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontTrustStores = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudfrontTrustStore,
    idFilter,
    baseNode,
    optional,
  )
