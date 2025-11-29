import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ecr_repository

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  encryption_configuration: resolvableValue(
    z.object({
      encryption_type: z.string().optional(),
      kms_key: z.string().optional(),
    }).optional(),
  ),
  force_delete: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  image_scanning_configuration: resolvableValue(
    z.object({
      scan_on_push: z.boolean(),
    }).optional(),
  ),
  image_tag_mutability: resolvableValue(z.string().optional()),
  image_tag_mutability_exclusion_filter: resolvableValue(
    z.object({
      filter: z.string(),
      filter_type: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  registry_id: z.string().optional(),
  repository_url: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEcrRepository(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_repository'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsEcrRepository = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEcrRepository, node, id)

export const useAwsEcrRepositorys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEcrRepository, node, id)
