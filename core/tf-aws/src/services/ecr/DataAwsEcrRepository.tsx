import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEcrRepository } from './AwsEcrRepository.tsx'

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  registry_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  encryption_configuration: z.object({
    encryption_type: z.string(),
    kms_key: z.string(),
  }).array().optional(),
  image_scanning_configuration: z.object({
    scan_on_push: z.boolean(),
  }).array().optional(),
  image_tag_mutability: z.string().optional(),
  image_tag_mutability_exclusion_filter: z.object({
    filter: z.string(),
    filter_type: z.string(),
  }).array().optional(),
  most_recent_image_tags: z.string().array().optional(),
  repository_url: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ecr_repository

export function DataAwsEcrRepository(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEcrRepository
      _type='aws_ecr_repository'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEcrRepository = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(DataAwsEcrRepository, idFilter, baseNode, optional)

export const useDataAwsEcrRepositorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsEcrRepository, idFilter, baseNode, optional)
