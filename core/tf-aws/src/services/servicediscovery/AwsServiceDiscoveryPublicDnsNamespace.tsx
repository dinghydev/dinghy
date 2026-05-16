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

export const AwsServiceDiscoveryPublicDnsNamespaceInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsServiceDiscoveryPublicDnsNamespaceOutputSchema = z.object({
  arn: z.string().optional(),
  hosted_zone: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsServiceDiscoveryPublicDnsNamespaceInputProps =
  & z.input<typeof AwsServiceDiscoveryPublicDnsNamespaceInputSchema>
  & NodeProps

export type AwsServiceDiscoveryPublicDnsNamespaceOutputProps =
  & z.output<typeof AwsServiceDiscoveryPublicDnsNamespaceOutputSchema>
  & z.output<typeof AwsServiceDiscoveryPublicDnsNamespaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/service_discovery_public_dns_namespace

export function AwsServiceDiscoveryPublicDnsNamespace(
  props: Partial<AwsServiceDiscoveryPublicDnsNamespaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_service_discovery_public_dns_namespace'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServiceDiscoveryPublicDnsNamespaceInputSchema}
      _outputSchema={AwsServiceDiscoveryPublicDnsNamespaceOutputSchema}
      {...props}
    />
  )
}

export const useAwsServiceDiscoveryPublicDnsNamespace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServiceDiscoveryPublicDnsNamespaceOutputProps>(
    AwsServiceDiscoveryPublicDnsNamespace,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServiceDiscoveryPublicDnsNamespaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServiceDiscoveryPublicDnsNamespaceOutputProps>(
    AwsServiceDiscoveryPublicDnsNamespace,
    idFilter,
    baseNode,
    optional,
  )
