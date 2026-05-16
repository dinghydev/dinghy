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

export const AwsCloudfrontTrustStoreInputSchema = TfMetaSchema.extend({
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
})

export const AwsCloudfrontTrustStoreOutputSchema = z.object({
  arn: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
  number_of_ca_certificates: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCloudfrontTrustStoreInputProps =
  & z.input<typeof AwsCloudfrontTrustStoreInputSchema>
  & NodeProps

export type AwsCloudfrontTrustStoreOutputProps =
  & z.output<typeof AwsCloudfrontTrustStoreOutputSchema>
  & z.output<typeof AwsCloudfrontTrustStoreInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudfront_trust_store

export function AwsCloudfrontTrustStore(
  props: Partial<AwsCloudfrontTrustStoreInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_trust_store'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudfrontTrustStoreInputSchema}
      _outputSchema={AwsCloudfrontTrustStoreOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontTrustStore = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudfrontTrustStoreOutputProps>(
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
  useTypedNodes<AwsCloudfrontTrustStoreOutputProps>(
    AwsCloudfrontTrustStore,
    idFilter,
    baseNode,
    optional,
  )
