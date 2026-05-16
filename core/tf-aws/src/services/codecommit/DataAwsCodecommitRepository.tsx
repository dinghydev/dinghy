import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCodecommitRepository } from './AwsCodecommitRepository.tsx'

export const DataAwsCodecommitRepositoryInputSchema = TfMetaSchema.extend({
  repository_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsCodecommitRepositoryOutputSchema = z.object({
  arn: z.string().optional(),
  clone_url_http: z.string().optional(),
  clone_url_ssh: z.string().optional(),
  kms_key_id: z.string().optional(),
  repository_id: z.string().optional(),
})

export type DataAwsCodecommitRepositoryInputProps =
  & z.input<typeof DataAwsCodecommitRepositoryInputSchema>
  & NodeProps

export type DataAwsCodecommitRepositoryOutputProps =
  & z.output<typeof DataAwsCodecommitRepositoryOutputSchema>
  & z.output<typeof DataAwsCodecommitRepositoryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/codecommit_repository

export function DataAwsCodecommitRepository(
  props: Partial<DataAwsCodecommitRepositoryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCodecommitRepository
      _type='aws_codecommit_repository'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCodecommitRepositoryInputSchema}
      _outputSchema={DataAwsCodecommitRepositoryOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCodecommitRepository = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCodecommitRepositoryOutputProps>(
    DataAwsCodecommitRepository,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCodecommitRepositorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCodecommitRepositoryOutputProps>(
    DataAwsCodecommitRepository,
    idFilter,
    baseNode,
    optional,
  )
