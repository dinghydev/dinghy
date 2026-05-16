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

export const AwsCodeartifactRepositoryInputSchema = TfMetaSchema.extend({
  domain: resolvableValue(z.string()),
  repository: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  domain_owner: resolvableValue(z.string().optional()),
  external_connections: resolvableValue(
    z.object({
      external_connection_name: z.string(),
      package_format: z.string().optional(),
      status: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  upstream: resolvableValue(
    z.object({
      repository_name: z.string(),
    }).array().optional(),
  ),
})

export const AwsCodeartifactRepositoryOutputSchema = z.object({
  administrator_account: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsCodeartifactRepositoryImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsCodeartifactRepositoryInputProps =
  & z.input<typeof AwsCodeartifactRepositoryInputSchema>
  & z.input<typeof AwsCodeartifactRepositoryImportSchema>
  & NodeProps

export type AwsCodeartifactRepositoryOutputProps =
  & z.output<typeof AwsCodeartifactRepositoryOutputSchema>
  & z.output<typeof AwsCodeartifactRepositoryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codeartifact_repository

export function AwsCodeartifactRepository(
  props: Partial<AwsCodeartifactRepositoryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codeartifact_repository'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodeartifactRepositoryInputSchema}
      _outputSchema={AwsCodeartifactRepositoryOutputSchema}
      _importSchema={AwsCodeartifactRepositoryImportSchema}
      {...props}
    />
  )
}

export const useAwsCodeartifactRepository = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodeartifactRepositoryOutputProps>(
    AwsCodeartifactRepository,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodeartifactRepositorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodeartifactRepositoryOutputProps>(
    AwsCodeartifactRepository,
    idFilter,
    baseNode,
    optional,
  )
