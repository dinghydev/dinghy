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

export const AwsImagebuilderContainerRecipeInputSchema = TfMetaSchema.extend({
  component: resolvableValue(
    z.object({
      component_arn: z.string(),
      parameter: z.object({
        name: z.string(),
        value: z.string(),
      }).array().optional(),
    }).array(),
  ),
  container_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  parent_image: resolvableValue(z.string()),
  target_repository: resolvableValue(z.object({
    repository_name: z.string(),
    service: z.string(),
  })),
  version: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  dockerfile_template_data: resolvableValue(z.string().optional()),
  dockerfile_template_uri: resolvableValue(z.string().optional()),
  instance_configuration: resolvableValue(
    z.object({
      image: z.string().optional(),
      block_device_mapping: z.object({
        device_name: z.string().optional(),
        no_device: z.boolean().optional(),
        virtual_name: z.string().optional(),
        ebs: z.object({
          delete_on_termination: z.string().optional(),
          encrypted: z.string().optional(),
          iops: z.number().optional(),
          kms_key_id: z.string().optional(),
          snapshot_id: z.string().optional(),
          throughput: z.number().optional(),
          volume_size: z.number().optional(),
          volume_type: z.string().optional(),
        }).optional(),
      }).array().optional(),
    }).optional(),
  ),
  kms_key_id: resolvableValue(z.string().optional()),
  platform_override: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  working_directory: resolvableValue(z.string().optional()),
})

export const AwsImagebuilderContainerRecipeOutputSchema = z.object({
  arn: z.string().optional(),
  date_created: z.string().optional(),
  encrypted: z.boolean().optional(),
  id: z.string().optional(),
  owner: z.string().optional(),
  platform: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsImagebuilderContainerRecipeImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsImagebuilderContainerRecipeInputProps =
  & z.input<typeof AwsImagebuilderContainerRecipeInputSchema>
  & z.input<typeof AwsImagebuilderContainerRecipeImportSchema>
  & NodeProps

export type AwsImagebuilderContainerRecipeOutputProps =
  & z.output<typeof AwsImagebuilderContainerRecipeOutputSchema>
  & z.output<typeof AwsImagebuilderContainerRecipeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/imagebuilder_container_recipe

export function AwsImagebuilderContainerRecipe(
  props: Partial<AwsImagebuilderContainerRecipeInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_container_recipe'
      _category='resource'
      _title={_title}
      _inputSchema={AwsImagebuilderContainerRecipeInputSchema}
      _outputSchema={AwsImagebuilderContainerRecipeOutputSchema}
      _importSchema={AwsImagebuilderContainerRecipeImportSchema}
      {...props}
    />
  )
}

export const useAwsImagebuilderContainerRecipe = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsImagebuilderContainerRecipeOutputProps>(
    AwsImagebuilderContainerRecipe,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsImagebuilderContainerRecipes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsImagebuilderContainerRecipeOutputProps>(
    AwsImagebuilderContainerRecipe,
    idFilter,
    baseNode,
    optional,
  )
