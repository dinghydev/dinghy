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

export const AwsImagebuilderImageInputSchema = TfMetaSchema.extend({
  infrastructure_configuration_arn: resolvableValue(z.string()),
  container_recipe_arn: resolvableValue(z.string().optional()),
  distribution_configuration_arn: resolvableValue(z.string().optional()),
  enhanced_image_metadata_enabled: resolvableValue(z.boolean().optional()),
  execution_role: resolvableValue(z.string().optional()),
  image_recipe_arn: resolvableValue(z.string().optional()),
  image_scanning_configuration: resolvableValue(
    z.object({
      image_scanning_enabled: z.boolean().optional(),
      ecr_configuration: z.object({
        container_tags: z.string().array().optional(),
        repository_name: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  image_tests_configuration: resolvableValue(
    z.object({
      image_tests_enabled: z.boolean().optional(),
      timeout_minutes: z.number().optional(),
    }).optional(),
  ),
  logging_configuration: resolvableValue(
    z.object({
      log_group_name: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
  workflow: resolvableValue(
    z.object({
      on_failure: z.string().optional(),
      parallel_group: z.string().optional(),
      workflow_arn: z.string(),
      parameter: z.object({
        name: z.string(),
        value: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
})

export const AwsImagebuilderImageOutputSchema = z.object({
  arn: z.string().optional(),
  date_created: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  os_version: z.string().optional(),
  output_resources: z.object({
    amis: z.set(z.object({
      account_id: z.string(),
      description: z.string(),
      image: z.string(),
      name: z.string(),
      region: z.string(),
    })),
    containers: z.set(z.object({
      image_uris: z.set(z.string()),
      region: z.string(),
    })),
  }).array().optional(),
  platform: z.string().optional(),
  region: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
})

export const AwsImagebuilderImageImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsImagebuilderImageInputProps =
  & z.input<typeof AwsImagebuilderImageInputSchema>
  & z.input<typeof AwsImagebuilderImageImportSchema>
  & NodeProps

export type AwsImagebuilderImageOutputProps =
  & z.output<typeof AwsImagebuilderImageOutputSchema>
  & z.output<typeof AwsImagebuilderImageInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/imagebuilder_image

export function AwsImagebuilderImage(
  props: Partial<AwsImagebuilderImageInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_image'
      _category='resource'
      _title={_title}
      _inputSchema={AwsImagebuilderImageInputSchema}
      _outputSchema={AwsImagebuilderImageOutputSchema}
      _importSchema={AwsImagebuilderImageImportSchema}
      {...props}
    />
  )
}

export const useAwsImagebuilderImage = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsImagebuilderImageOutputProps>(
    AwsImagebuilderImage,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsImagebuilderImages = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsImagebuilderImageOutputProps>(
    AwsImagebuilderImage,
    idFilter,
    baseNode,
    optional,
  )
