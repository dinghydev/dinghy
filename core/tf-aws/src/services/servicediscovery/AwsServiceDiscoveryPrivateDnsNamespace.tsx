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

export const AwsServiceDiscoveryPrivateDnsNamespaceInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    vpc: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsServiceDiscoveryPrivateDnsNamespaceOutputSchema = z.object({
  arn: z.string().optional(),
  hosted_zone: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsServiceDiscoveryPrivateDnsNamespaceInputProps =
  & z.input<typeof AwsServiceDiscoveryPrivateDnsNamespaceInputSchema>
  & NodeProps

export type AwsServiceDiscoveryPrivateDnsNamespaceOutputProps =
  & z.output<typeof AwsServiceDiscoveryPrivateDnsNamespaceOutputSchema>
  & z.output<typeof AwsServiceDiscoveryPrivateDnsNamespaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/service_discovery_private_dns_namespace

export function AwsServiceDiscoveryPrivateDnsNamespace(
  props: Partial<AwsServiceDiscoveryPrivateDnsNamespaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_service_discovery_private_dns_namespace'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServiceDiscoveryPrivateDnsNamespaceInputSchema}
      _outputSchema={AwsServiceDiscoveryPrivateDnsNamespaceOutputSchema}
      {...props}
    />
  )
}

export const useAwsServiceDiscoveryPrivateDnsNamespace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServiceDiscoveryPrivateDnsNamespaceOutputProps>(
    AwsServiceDiscoveryPrivateDnsNamespace,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServiceDiscoveryPrivateDnsNamespaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServiceDiscoveryPrivateDnsNamespaceOutputProps>(
    AwsServiceDiscoveryPrivateDnsNamespace,
    idFilter,
    baseNode,
    optional,
  )
