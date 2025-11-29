import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCodecommitRepository } from './AwsCodecommitRepository.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/codecommit_repository

export const InputSchema = z.object({
  repository_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  clone_url_http: z.string().optional(),
  clone_url_ssh: z.string().optional(),
  kms_key_id: z.string().optional(),
  repository_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCodecommitRepository(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCodecommitRepository
      _type='aws_codecommit_repository'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCodecommitRepository = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsCodecommitRepository, node, id)

export const useDataAwsCodecommitRepositorys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsCodecommitRepository, node, id)
