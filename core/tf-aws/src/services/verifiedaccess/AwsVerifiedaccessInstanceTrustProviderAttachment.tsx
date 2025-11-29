import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/verifiedaccess_instance_trust_provider_attachment

export const InputSchema = z.object({
  verifiedaccess_instance_id: resolvableValue(z.string()),
  verifiedaccess_trust_provider_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVerifiedaccessInstanceTrustProviderAttachment(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_verifiedaccess_instance_trust_provider_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVerifiedaccessInstanceTrustProviderAttachment = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsVerifiedaccessInstanceTrustProviderAttachment,
    node,
    id,
  )

export const useAwsVerifiedaccessInstanceTrustProviderAttachments = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsVerifiedaccessInstanceTrustProviderAttachment,
    node,
    id,
  )
