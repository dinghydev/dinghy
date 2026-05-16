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

export const AwsEcrRepositoryCreationTemplateInputSchema = TfMetaSchema.extend({
  applied_for: resolvableValue(z.string().array()),
  prefix: resolvableValue(z.string()),
  custom_role_arn: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  encryption_configuration: resolvableValue(
    z.object({
      encryption_type: z.string().optional(),
      kms_key: z.string().optional(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  image_tag_mutability: resolvableValue(z.string().optional()),
  image_tag_mutability_exclusion_filter: resolvableValue(
    z.object({
      filter: z.string(),
      filter_type: z.string(),
    }).array().optional(),
  ),
  lifecycle_policy: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  repository_policy: resolvableValue(z.string().optional()),
  resource_tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsEcrRepositoryCreationTemplateOutputSchema = z.object({
  registry_id: z.string().optional(),
})

export type AwsEcrRepositoryCreationTemplateInputProps =
  & z.input<typeof AwsEcrRepositoryCreationTemplateInputSchema>
  & NodeProps

export type AwsEcrRepositoryCreationTemplateOutputProps =
  & z.output<typeof AwsEcrRepositoryCreationTemplateOutputSchema>
  & z.output<typeof AwsEcrRepositoryCreationTemplateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ecr_repository_creation_template

export function AwsEcrRepositoryCreationTemplate(
  props: Partial<AwsEcrRepositoryCreationTemplateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_repository_creation_template'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEcrRepositoryCreationTemplateInputSchema}
      _outputSchema={AwsEcrRepositoryCreationTemplateOutputSchema}
      {...props}
    />
  )
}

export const useAwsEcrRepositoryCreationTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEcrRepositoryCreationTemplateOutputProps>(
    AwsEcrRepositoryCreationTemplate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEcrRepositoryCreationTemplates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEcrRepositoryCreationTemplateOutputProps>(
    AwsEcrRepositoryCreationTemplate,
    idFilter,
    baseNode,
    optional,
  )
