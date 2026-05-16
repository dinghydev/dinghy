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

export const DataAwsCodeartifactRepositoryEndpointInputSchema = TfMetaSchema
  .extend({
    domain: resolvableValue(z.string()),
    format: resolvableValue(z.string()),
    repository: resolvableValue(z.string()),
    domain_owner: resolvableValue(z.string().optional()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsCodeartifactRepositoryEndpointOutputSchema = z.object({
  repository_endpoint: z.string().optional(),
})

export type DataAwsCodeartifactRepositoryEndpointInputProps =
  & z.input<typeof DataAwsCodeartifactRepositoryEndpointInputSchema>
  & NodeProps

export type DataAwsCodeartifactRepositoryEndpointOutputProps =
  & z.output<typeof DataAwsCodeartifactRepositoryEndpointOutputSchema>
  & z.output<typeof DataAwsCodeartifactRepositoryEndpointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/codeartifact_repository_endpoint

export function DataAwsCodeartifactRepositoryEndpoint(
  props: Partial<DataAwsCodeartifactRepositoryEndpointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codeartifact_repository_endpoint'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCodeartifactRepositoryEndpointInputSchema}
      _outputSchema={DataAwsCodeartifactRepositoryEndpointOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCodeartifactRepositoryEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCodeartifactRepositoryEndpointOutputProps>(
    DataAwsCodeartifactRepositoryEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCodeartifactRepositoryEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCodeartifactRepositoryEndpointOutputProps>(
    DataAwsCodeartifactRepositoryEndpoint,
    idFilter,
    baseNode,
    optional,
  )
