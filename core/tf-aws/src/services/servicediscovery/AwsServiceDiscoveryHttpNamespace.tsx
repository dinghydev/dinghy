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

export const AwsServiceDiscoveryHttpNamespaceInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsServiceDiscoveryHttpNamespaceOutputSchema = z.object({
  arn: z.string().optional(),
  http_name: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsServiceDiscoveryHttpNamespaceInputProps =
  & z.input<typeof AwsServiceDiscoveryHttpNamespaceInputSchema>
  & NodeProps

export type AwsServiceDiscoveryHttpNamespaceOutputProps =
  & z.output<typeof AwsServiceDiscoveryHttpNamespaceOutputSchema>
  & z.output<typeof AwsServiceDiscoveryHttpNamespaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/service_discovery_http_namespace

export function AwsServiceDiscoveryHttpNamespace(
  props: Partial<AwsServiceDiscoveryHttpNamespaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_service_discovery_http_namespace'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServiceDiscoveryHttpNamespaceInputSchema}
      _outputSchema={AwsServiceDiscoveryHttpNamespaceOutputSchema}
      {...props}
    />
  )
}

export const useAwsServiceDiscoveryHttpNamespace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServiceDiscoveryHttpNamespaceOutputProps>(
    AwsServiceDiscoveryHttpNamespace,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServiceDiscoveryHttpNamespaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServiceDiscoveryHttpNamespaceOutputProps>(
    AwsServiceDiscoveryHttpNamespace,
    idFilter,
    baseNode,
    optional,
  )
