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

export const AwsNetworkmanagerLinkInputSchema = TfMetaSchema.extend({
  bandwidth: resolvableValue(z.object({
    download_speed: z.number().optional(),
    upload_speed: z.number().optional(),
  })),
  global_network_id: resolvableValue(z.string()),
  site_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  provider_name: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  type: resolvableValue(z.string().optional()),
})

export const AwsNetworkmanagerLinkOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNetworkmanagerLinkInputProps =
  & z.input<typeof AwsNetworkmanagerLinkInputSchema>
  & NodeProps

export type AwsNetworkmanagerLinkOutputProps =
  & z.output<typeof AwsNetworkmanagerLinkOutputSchema>
  & z.output<typeof AwsNetworkmanagerLinkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_link

export function AwsNetworkmanagerLink(
  props: Partial<AwsNetworkmanagerLinkInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_link'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerLinkInputSchema}
      _outputSchema={AwsNetworkmanagerLinkOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerLink = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmanagerLinkOutputProps>(
    AwsNetworkmanagerLink,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerLinks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmanagerLinkOutputProps>(
    AwsNetworkmanagerLink,
    idFilter,
    baseNode,
    optional,
  )
