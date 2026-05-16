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

export const AwsLbTrustStoreRevocationInputSchema = TfMetaSchema.extend({
  revocations_s3_bucket: resolvableValue(z.string()),
  revocations_s3_key: resolvableValue(z.string()),
  trust_store_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  revocations_s3_object_version: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const AwsLbTrustStoreRevocationOutputSchema = z.object({
  id: z.string().optional(),
  revocation_id: z.number().optional(),
})

export type AwsLbTrustStoreRevocationInputProps =
  & z.input<typeof AwsLbTrustStoreRevocationInputSchema>
  & NodeProps

export type AwsLbTrustStoreRevocationOutputProps =
  & z.output<typeof AwsLbTrustStoreRevocationOutputSchema>
  & z.output<typeof AwsLbTrustStoreRevocationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lb_trust_store_revocation

export function AwsLbTrustStoreRevocation(
  props: Partial<AwsLbTrustStoreRevocationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lb_trust_store_revocation'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLbTrustStoreRevocationInputSchema}
      _outputSchema={AwsLbTrustStoreRevocationOutputSchema}
      {...props}
    />
  )
}

export const useAwsLbTrustStoreRevocation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLbTrustStoreRevocationOutputProps>(
    AwsLbTrustStoreRevocation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLbTrustStoreRevocations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLbTrustStoreRevocationOutputProps>(
    AwsLbTrustStoreRevocation,
    idFilter,
    baseNode,
    optional,
  )
