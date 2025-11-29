import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_code_repository

export const InputSchema = z.object({
  code_repository_name: resolvableValue(z.string()),
  git_config: resolvableValue(z.object({
    branch: z.string().optional(),
    repository_url: z.string(),
    secret_arn: z.string().optional(),
  })),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSagemakerCodeRepository(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_code_repository'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerCodeRepository = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSagemakerCodeRepository, node, id)

export const useAwsSagemakerCodeRepositorys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSagemakerCodeRepository, node, id)
