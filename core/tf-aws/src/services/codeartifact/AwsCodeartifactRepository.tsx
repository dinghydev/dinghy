import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/codeartifact_repository

export const InputSchema = z.object({
  domain: resolvableValue(z.string()),
  repository: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  domain_owner: resolvableValue(z.string().optional()),
  external_connections: resolvableValue(
    z.object({
      external_connection_name: z.string(),
      package_format: z.string(),
      status: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  upstream: resolvableValue(
    z.object({
      repository_name: z.string(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  administrator_account: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCodeartifactRepository(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codeartifact_repository'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCodeartifactRepository = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCodeartifactRepository, node, id)

export const useAwsCodeartifactRepositorys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCodeartifactRepository, node, id)
