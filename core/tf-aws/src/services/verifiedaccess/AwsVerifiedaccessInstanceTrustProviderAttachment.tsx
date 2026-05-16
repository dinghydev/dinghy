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

export const AwsVerifiedaccessInstanceTrustProviderAttachmentInputSchema =
  TfMetaSchema.extend({
    verifiedaccess_instance_id: resolvableValue(z.string()),
    verifiedaccess_trust_provider_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsVerifiedaccessInstanceTrustProviderAttachmentOutputSchema = z
  .object({
    id: z.string().optional(),
  })

export type AwsVerifiedaccessInstanceTrustProviderAttachmentInputProps =
  & z.input<typeof AwsVerifiedaccessInstanceTrustProviderAttachmentInputSchema>
  & NodeProps

export type AwsVerifiedaccessInstanceTrustProviderAttachmentOutputProps =
  & z.output<
    typeof AwsVerifiedaccessInstanceTrustProviderAttachmentOutputSchema
  >
  & z.output<typeof AwsVerifiedaccessInstanceTrustProviderAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/verifiedaccess_instance_trust_provider_attachment

export function AwsVerifiedaccessInstanceTrustProviderAttachment(
  props: Partial<AwsVerifiedaccessInstanceTrustProviderAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_verifiedaccess_instance_trust_provider_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVerifiedaccessInstanceTrustProviderAttachmentInputSchema}
      _outputSchema={AwsVerifiedaccessInstanceTrustProviderAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsVerifiedaccessInstanceTrustProviderAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVerifiedaccessInstanceTrustProviderAttachmentOutputProps>(
    AwsVerifiedaccessInstanceTrustProviderAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVerifiedaccessInstanceTrustProviderAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVerifiedaccessInstanceTrustProviderAttachmentOutputProps>(
    AwsVerifiedaccessInstanceTrustProviderAttachment,
    idFilter,
    baseNode,
    optional,
  )
