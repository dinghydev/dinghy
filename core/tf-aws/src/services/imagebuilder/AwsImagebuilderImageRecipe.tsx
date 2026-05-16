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

export const AwsImagebuilderImageRecipeInputSchema = TfMetaSchema.extend({
  component: resolvableValue(
    z.object({
      component_arn: z.string(),
      parameter: z.object({
        name: z.string(),
        value: z.string(),
      }).array().optional(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  parent_image: resolvableValue(z.string()),
  version: resolvableValue(z.string()),
  ami_tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  block_device_mapping: resolvableValue(
    z.object({
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
  ),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  systems_manager_agent: resolvableValue(
    z.object({
      uninstall_after_build: z.boolean(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  user_data_base64: resolvableValue(z.string().optional()),
  working_directory: resolvableValue(z.string().optional()),
})

export const AwsImagebuilderImageRecipeOutputSchema = z.object({
  arn: z.string().optional(),
  date_created: z.string().optional(),
  id: z.string().optional(),
  owner: z.string().optional(),
  platform: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsImagebuilderImageRecipeImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsImagebuilderImageRecipeInputProps =
  & z.input<typeof AwsImagebuilderImageRecipeInputSchema>
  & z.input<typeof AwsImagebuilderImageRecipeImportSchema>
  & NodeProps

export type AwsImagebuilderImageRecipeOutputProps =
  & z.output<typeof AwsImagebuilderImageRecipeOutputSchema>
  & z.output<typeof AwsImagebuilderImageRecipeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/imagebuilder_image_recipe

export function AwsImagebuilderImageRecipe(
  props: Partial<AwsImagebuilderImageRecipeInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_image_recipe'
      _category='resource'
      _title={_title}
      _inputSchema={AwsImagebuilderImageRecipeInputSchema}
      _outputSchema={AwsImagebuilderImageRecipeOutputSchema}
      _importSchema={AwsImagebuilderImageRecipeImportSchema}
      {...props}
    />
  )
}

export const useAwsImagebuilderImageRecipe = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsImagebuilderImageRecipeOutputProps>(
    AwsImagebuilderImageRecipe,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsImagebuilderImageRecipes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsImagebuilderImageRecipeOutputProps>(
    AwsImagebuilderImageRecipe,
    idFilter,
    baseNode,
    optional,
  )
