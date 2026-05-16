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

export const AwsEcrpublicRepositoryInputSchema = TfMetaSchema.extend({
  repository_name: resolvableValue(z.string()),
  catalog_data: resolvableValue(
    z.object({
      about_text: z.string().optional(),
      architectures: z.string().array().optional(),
      description: z.string().optional(),
      logo_image_blob: z.string().optional(),
      operating_systems: z.string().array().optional(),
      usage_text: z.string().optional(),
    }).optional(),
  ),
  force_destroy: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEcrpublicRepositoryOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  registry_id: z.string().optional(),
  repository_uri: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEcrpublicRepositoryInputProps =
  & z.input<typeof AwsEcrpublicRepositoryInputSchema>
  & NodeProps

export type AwsEcrpublicRepositoryOutputProps =
  & z.output<typeof AwsEcrpublicRepositoryOutputSchema>
  & z.output<typeof AwsEcrpublicRepositoryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ecrpublic_repository

export function AwsEcrpublicRepository(
  props: Partial<AwsEcrpublicRepositoryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecrpublic_repository'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEcrpublicRepositoryInputSchema}
      _outputSchema={AwsEcrpublicRepositoryOutputSchema}
      {...props}
    />
  )
}

export const useAwsEcrpublicRepository = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEcrpublicRepositoryOutputProps>(
    AwsEcrpublicRepository,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEcrpublicRepositorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEcrpublicRepositoryOutputProps>(
    AwsEcrpublicRepository,
    idFilter,
    baseNode,
    optional,
  )
