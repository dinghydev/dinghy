import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEcrRepositoryCreationTemplate } from './AwsEcrRepositoryCreationTemplate.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ecr_repository_creation_template

export const InputSchema = z.object({
  prefix: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  applied_for: z.string().array().optional(),
  custom_role_arn: z.string().optional(),
  description: z.string().optional(),
  encryption_configuration: z.object({
    encryption_type: z.string(),
    kms_key: z.string(),
  }).array().optional(),
  image_tag_mutability: z.string().optional(),
  image_tag_mutability_exclusion_filter: z.object({
    filter: z.string(),
    filter_type: z.string(),
  }).array().optional(),
  lifecycle_policy: z.string().optional(),
  registry_id: z.string().optional(),
  repository_policy: z.string().optional(),
  resource_tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEcrRepositoryCreationTemplate(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEcrRepositoryCreationTemplate
      _type='aws_ecr_repository_creation_template'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEcrRepositoryCreationTemplate = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsEcrRepositoryCreationTemplate, node, id)

export const useDataAwsEcrRepositoryCreationTemplates = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsEcrRepositoryCreationTemplate, node, id)
