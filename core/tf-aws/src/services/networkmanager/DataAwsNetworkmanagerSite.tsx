import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsNetworkmanagerSite } from './AwsNetworkmanagerSite.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/networkmanager_site

export const InputSchema = z.object({
  global_network_id: resolvableValue(z.string()),
  site_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  location: z.object({
    address: z.string(),
    latitude: z.string(),
    longitude: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsNetworkmanagerSite(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsNetworkmanagerSite
      _type='aws_networkmanager_site'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsNetworkmanagerSite = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsNetworkmanagerSite, node, id)

export const useDataAwsNetworkmanagerSites = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsNetworkmanagerSite, node, id)
