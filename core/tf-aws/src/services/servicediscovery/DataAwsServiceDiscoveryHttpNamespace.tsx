import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsServiceDiscoveryHttpNamespace } from './AwsServiceDiscoveryHttpNamespace.tsx'

export const DataAwsServiceDiscoveryHttpNamespaceInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsServiceDiscoveryHttpNamespaceOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  http_name: z.string().optional(),
  id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsServiceDiscoveryHttpNamespaceInputProps =
  & z.input<typeof DataAwsServiceDiscoveryHttpNamespaceInputSchema>
  & NodeProps

export type DataAwsServiceDiscoveryHttpNamespaceOutputProps =
  & z.output<typeof DataAwsServiceDiscoveryHttpNamespaceOutputSchema>
  & z.output<typeof DataAwsServiceDiscoveryHttpNamespaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/service_discovery_http_namespace

export function DataAwsServiceDiscoveryHttpNamespace(
  props: Partial<DataAwsServiceDiscoveryHttpNamespaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsServiceDiscoveryHttpNamespace
      _type='aws_service_discovery_http_namespace'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsServiceDiscoveryHttpNamespaceInputSchema}
      _outputSchema={DataAwsServiceDiscoveryHttpNamespaceOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsServiceDiscoveryHttpNamespace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsServiceDiscoveryHttpNamespaceOutputProps>(
    DataAwsServiceDiscoveryHttpNamespace,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsServiceDiscoveryHttpNamespaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsServiceDiscoveryHttpNamespaceOutputProps>(
    DataAwsServiceDiscoveryHttpNamespace,
    idFilter,
    baseNode,
    optional,
  )
