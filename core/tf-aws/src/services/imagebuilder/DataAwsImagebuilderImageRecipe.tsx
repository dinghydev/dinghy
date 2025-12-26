import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsImagebuilderImageRecipe } from './AwsImagebuilderImageRecipe.tsx'

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  ami_tags: z.record(z.string(), z.string()).optional(),
  block_device_mapping: z.set(z.object({
    device_name: z.string(),
    ebs: z.object({
      delete_on_termination: z.string(),
      encrypted: z.string(),
      iops: z.number(),
      kms_key_id: z.string(),
      snapshot_id: z.string(),
      throughput: z.number(),
      volume_size: z.number(),
      volume_type: z.string(),
    }).array(),
    no_device: z.string(),
    virtual_name: z.string(),
  })).optional(),
  component: z.object({
    component_arn: z.string(),
    parameter: z.set(z.object({
      name: z.string(),
      value: z.string(),
    })),
  }).array().optional(),
  date_created: z.string().optional(),
  description: z.string().optional(),
  name: z.string().optional(),
  owner: z.string().optional(),
  parent_image: z.string().optional(),
  platform: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  user_data_base64: z.string().optional(),
  version: z.string().optional(),
  working_directory: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/imagebuilder_image_recipe

export function DataAwsImagebuilderImageRecipe(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsImagebuilderImageRecipe
      _type='aws_imagebuilder_image_recipe'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsImagebuilderImageRecipe = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsImagebuilderImageRecipe,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsImagebuilderImageRecipes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsImagebuilderImageRecipe,
    idFilter,
    baseNode,
    optional,
  )
