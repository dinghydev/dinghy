import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEcrRepositoryCreationTemplate } from './AwsEcrRepositoryCreationTemplate.tsx'

export const DataAwsEcrRepositoryCreationTemplateInputSchema = TfMetaSchema
  .extend({
    prefix: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsEcrRepositoryCreationTemplateOutputSchema = z.object({
  applied_for: z.set(z.string()).optional(),
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

export type DataAwsEcrRepositoryCreationTemplateInputProps =
  & z.input<typeof DataAwsEcrRepositoryCreationTemplateInputSchema>
  & NodeProps

export type DataAwsEcrRepositoryCreationTemplateOutputProps =
  & z.output<typeof DataAwsEcrRepositoryCreationTemplateOutputSchema>
  & z.output<typeof DataAwsEcrRepositoryCreationTemplateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ecr_repository_creation_template

export function DataAwsEcrRepositoryCreationTemplate(
  props: Partial<DataAwsEcrRepositoryCreationTemplateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEcrRepositoryCreationTemplate
      _type='aws_ecr_repository_creation_template'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEcrRepositoryCreationTemplateInputSchema}
      _outputSchema={DataAwsEcrRepositoryCreationTemplateOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEcrRepositoryCreationTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEcrRepositoryCreationTemplateOutputProps>(
    DataAwsEcrRepositoryCreationTemplate,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEcrRepositoryCreationTemplates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEcrRepositoryCreationTemplateOutputProps>(
    DataAwsEcrRepositoryCreationTemplate,
    idFilter,
    baseNode,
    optional,
  )
