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

export const InputSchema = TfMetaSchema.extend({
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

export const OutputSchema = z.object({
  registry_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecr_repository_creation_template

export function AwsEcrRepositoryCreationTemplate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_repository_creation_template'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEcrRepositoryCreationTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsEcrRepositoryCreationTemplate,
    idFilter,
    baseNode,
    optional,
  )
