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

export const AwsLbTrustStoreInputSchema = TfMetaSchema.extend({
  ca_certificates_bundle_s3_bucket: resolvableValue(z.string()),
  ca_certificates_bundle_s3_key: resolvableValue(z.string()),
  ca_certificates_bundle_s3_object_version: resolvableValue(
    z.string().optional(),
  ),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsLbTrustStoreOutputSchema = z.object({
  arn: z.string().optional(),
  arn_suffix: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsLbTrustStoreImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsLbTrustStoreInputProps =
  & z.input<typeof AwsLbTrustStoreInputSchema>
  & z.input<typeof AwsLbTrustStoreImportSchema>
  & NodeProps

export type AwsLbTrustStoreOutputProps =
  & z.output<typeof AwsLbTrustStoreOutputSchema>
  & z.output<typeof AwsLbTrustStoreInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lb_trust_store

export function AwsLbTrustStore(props: Partial<AwsLbTrustStoreInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lb_trust_store'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLbTrustStoreInputSchema}
      _outputSchema={AwsLbTrustStoreOutputSchema}
      _importSchema={AwsLbTrustStoreImportSchema}
      {...props}
    />
  )
}

export const useAwsLbTrustStore = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLbTrustStoreOutputProps>(
    AwsLbTrustStore,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLbTrustStores = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLbTrustStoreOutputProps>(
    AwsLbTrustStore,
    idFilter,
    baseNode,
    optional,
  )
