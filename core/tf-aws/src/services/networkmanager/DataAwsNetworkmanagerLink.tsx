import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsNetworkmanagerLink } from './AwsNetworkmanagerLink.tsx'

export const InputSchema = z.object({
  global_network_id: resolvableValue(z.string()),
  link_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  bandwidth: z.object({
    download_speed: z.number(),
    upload_speed: z.number(),
  }).array().optional(),
  description: z.string().optional(),
  provider_name: z.string().optional(),
  site_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/networkmanager_link

export function DataAwsNetworkmanagerLink(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsNetworkmanagerLink
      _type='aws_networkmanager_link'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsNetworkmanagerLink = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsNetworkmanagerLink,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsNetworkmanagerLinks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsNetworkmanagerLink,
    idFilter,
    baseNode,
    optional,
  )
