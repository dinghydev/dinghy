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

export const AwsNetworkmanagerAttachmentAccepterInputSchema = TfMetaSchema
  .extend({
    attachment_id: resolvableValue(z.string()),
    attachment_type: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsNetworkmanagerAttachmentAccepterOutputSchema = z.object({
  attachment_policy_rule_number: z.number().optional(),
  core_network_arn: z.string().optional(),
  core_network_id: z.string().optional(),
  edge_location: z.string().optional(),
  edge_locations: z.string().array().optional(),
  owner_account_id: z.string().optional(),
  resource_arn: z.string().optional(),
  segment_name: z.string().optional(),
  state: z.string().optional(),
})

export type AwsNetworkmanagerAttachmentAccepterInputProps =
  & z.input<typeof AwsNetworkmanagerAttachmentAccepterInputSchema>
  & NodeProps

export type AwsNetworkmanagerAttachmentAccepterOutputProps =
  & z.output<typeof AwsNetworkmanagerAttachmentAccepterOutputSchema>
  & z.output<typeof AwsNetworkmanagerAttachmentAccepterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_attachment_accepter

export function AwsNetworkmanagerAttachmentAccepter(
  props: Partial<AwsNetworkmanagerAttachmentAccepterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_attachment_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerAttachmentAccepterInputSchema}
      _outputSchema={AwsNetworkmanagerAttachmentAccepterOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerAttachmentAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmanagerAttachmentAccepterOutputProps>(
    AwsNetworkmanagerAttachmentAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerAttachmentAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmanagerAttachmentAccepterOutputProps>(
    AwsNetworkmanagerAttachmentAccepter,
    idFilter,
    baseNode,
    optional,
  )
