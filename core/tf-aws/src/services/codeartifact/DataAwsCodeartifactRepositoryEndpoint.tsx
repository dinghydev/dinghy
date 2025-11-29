import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/codeartifact_repository_endpoint

export const InputSchema = z.object({
  domain: resolvableValue(z.string()),
  format: resolvableValue(z.string()),
  repository: resolvableValue(z.string()),
  domain_owner: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  repository_endpoint: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCodeartifactRepositoryEndpoint(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codeartifact_repository_endpoint'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCodeartifactRepositoryEndpoint = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsCodeartifactRepositoryEndpoint, node, id)

export const useDataAwsCodeartifactRepositoryEndpoints = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsCodeartifactRepositoryEndpoint, node, id)
