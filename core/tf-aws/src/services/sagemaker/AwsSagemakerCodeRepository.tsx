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

export const AwsSagemakerCodeRepositoryInputSchema = TfMetaSchema.extend({
  code_repository_name: resolvableValue(z.string()),
  git_config: resolvableValue(z.object({
    branch: z.string().optional(),
    repository_url: z.string(),
    secret_arn: z.string().optional(),
  })),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSagemakerCodeRepositoryOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSagemakerCodeRepositoryInputProps =
  & z.input<typeof AwsSagemakerCodeRepositoryInputSchema>
  & NodeProps

export type AwsSagemakerCodeRepositoryOutputProps =
  & z.output<typeof AwsSagemakerCodeRepositoryOutputSchema>
  & z.output<typeof AwsSagemakerCodeRepositoryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_code_repository

export function AwsSagemakerCodeRepository(
  props: Partial<AwsSagemakerCodeRepositoryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_code_repository'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerCodeRepositoryInputSchema}
      _outputSchema={AwsSagemakerCodeRepositoryOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerCodeRepository = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerCodeRepositoryOutputProps>(
    AwsSagemakerCodeRepository,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerCodeRepositorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerCodeRepositoryOutputProps>(
    AwsSagemakerCodeRepository,
    idFilter,
    baseNode,
    optional,
  )
