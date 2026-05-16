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

export const AwsEcrRepositoryInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  encryption_configuration: resolvableValue(
    z.object({
      encryption_type: z.string().optional(),
      kms_key: z.string().optional(),
    }).array().optional(),
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
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEcrRepositoryOutputSchema = z.object({
  arn: z.string().optional(),
  registry_id: z.string().optional(),
  repository_url: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsEcrRepositoryImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsEcrRepositoryInputProps =
  & z.input<typeof AwsEcrRepositoryInputSchema>
  & z.input<typeof AwsEcrRepositoryImportSchema>
  & NodeProps

export type AwsEcrRepositoryOutputProps =
  & z.output<typeof AwsEcrRepositoryOutputSchema>
  & z.output<typeof AwsEcrRepositoryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ecr_repository

export function AwsEcrRepository(props: Partial<AwsEcrRepositoryInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_repository'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEcrRepositoryInputSchema}
      _outputSchema={AwsEcrRepositoryOutputSchema}
      _importSchema={AwsEcrRepositoryImportSchema}
      {...props}
    />
  )
}

export const useAwsEcrRepository = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEcrRepositoryOutputProps>(
    AwsEcrRepository,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEcrRepositorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEcrRepositoryOutputProps>(
    AwsEcrRepository,
    idFilter,
    baseNode,
    optional,
  )
