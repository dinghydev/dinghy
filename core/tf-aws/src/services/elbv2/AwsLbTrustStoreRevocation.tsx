import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lb_trust_store_revocation

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  id: z.string().optional(),
  revocation_id: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLbTrustStoreRevocation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lb_trust_store_revocation'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLbTrustStoreRevocation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLbTrustStoreRevocation, node, id)

export const useAwsLbTrustStoreRevocations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLbTrustStoreRevocation, node, id)
