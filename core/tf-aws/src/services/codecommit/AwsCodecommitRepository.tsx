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

export const AwsCodecommitRepositoryInputSchema = TfMetaSchema.extend({
  repository_name: resolvableValue(z.string()),
  default_branch: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCodecommitRepositoryOutputSchema = z.object({
  arn: z.string().optional(),
  clone_url_http: z.string().optional(),
  clone_url_ssh: z.string().optional(),
  repository_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCodecommitRepositoryInputProps =
  & z.input<typeof AwsCodecommitRepositoryInputSchema>
  & NodeProps

export type AwsCodecommitRepositoryOutputProps =
  & z.output<typeof AwsCodecommitRepositoryOutputSchema>
  & z.output<typeof AwsCodecommitRepositoryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codecommit_repository

export function AwsCodecommitRepository(
  props: Partial<AwsCodecommitRepositoryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codecommit_repository'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodecommitRepositoryInputSchema}
      _outputSchema={AwsCodecommitRepositoryOutputSchema}
      {...props}
    />
  )
}

export const useAwsCodecommitRepository = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodecommitRepositoryOutputProps>(
    AwsCodecommitRepository,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodecommitRepositorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodecommitRepositoryOutputProps>(
    AwsCodecommitRepository,
    idFilter,
    baseNode,
    optional,
  )
