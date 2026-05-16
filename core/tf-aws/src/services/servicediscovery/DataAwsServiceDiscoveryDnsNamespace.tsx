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

export const DataAwsServiceDiscoveryDnsNamespaceInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    type: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsServiceDiscoveryDnsNamespaceOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  hosted_zone: z.string().optional(),
  id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsServiceDiscoveryDnsNamespaceInputProps =
  & z.input<typeof DataAwsServiceDiscoveryDnsNamespaceInputSchema>
  & NodeProps

export type DataAwsServiceDiscoveryDnsNamespaceOutputProps =
  & z.output<typeof DataAwsServiceDiscoveryDnsNamespaceOutputSchema>
  & z.output<typeof DataAwsServiceDiscoveryDnsNamespaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/service_discovery_dns_namespace

export function DataAwsServiceDiscoveryDnsNamespace(
  props: Partial<DataAwsServiceDiscoveryDnsNamespaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_service_discovery_dns_namespace'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsServiceDiscoveryDnsNamespaceInputSchema}
      _outputSchema={DataAwsServiceDiscoveryDnsNamespaceOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsServiceDiscoveryDnsNamespace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsServiceDiscoveryDnsNamespaceOutputProps>(
    DataAwsServiceDiscoveryDnsNamespace,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsServiceDiscoveryDnsNamespaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsServiceDiscoveryDnsNamespaceOutputProps>(
    DataAwsServiceDiscoveryDnsNamespace,
    idFilter,
    baseNode,
    optional,
  )
