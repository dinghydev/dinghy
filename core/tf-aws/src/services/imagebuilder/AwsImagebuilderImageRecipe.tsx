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

export const InputSchema = z.object({
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
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  systems_manager_agent: resolvableValue(
    z.object({
      uninstall_after_build: z.boolean(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  user_data_base64: resolvableValue(z.string().optional()),
  working_directory: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  date_created: z.string().optional(),
  owner: z.string().optional(),
  platform: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/imagebuilder_image_recipe

export function AwsImagebuilderImageRecipe(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_image_recipe'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsImagebuilderImageRecipe = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsImagebuilderImageRecipe,
    idFilter,
    baseNode,
    optional,
  )
