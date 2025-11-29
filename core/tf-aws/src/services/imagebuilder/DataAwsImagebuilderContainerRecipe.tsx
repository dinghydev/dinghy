import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsImagebuilderContainerRecipe } from './AwsImagebuilderContainerRecipe.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/imagebuilder_container_recipe

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  component: z.object({
    component_arn: z.string(),
    parameter: z.object({
      name: z.string(),
      value: z.string(),
    }).array(),
  }).array().optional(),
  container_type: z.string().optional(),
  date_created: z.string().optional(),
  description: z.string().optional(),
  dockerfile_template_data: z.string().optional(),
  encrypted: z.boolean().optional(),
  instance_configuration: z.object({
    block_device_mapping: z.object({
      device_name: z.string(),
      ebs: z.object({
        delete_on_termination: z.boolean(),
        encrypted: z.boolean(),
        iops: z.number(),
        kms_key_id: z.string(),
        snapshot_id: z.string(),
        throughput: z.number(),
        volume_size: z.number(),
        volume_type: z.string(),
      }).array(),
      no_device: z.string(),
      virtual_name: z.string(),
    }).array(),
    image: z.string(),
  }).array().optional(),
  kms_key_id: z.string().optional(),
  name: z.string().optional(),
  owner: z.string().optional(),
  parent_image: z.string().optional(),
  platform: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  target_repository: z.object({
    repository_name: z.string(),
    service: z.string(),
  }).array().optional(),
  version: z.string().optional(),
  working_directory: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsImagebuilderContainerRecipe(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsImagebuilderContainerRecipe
      _type='aws_imagebuilder_container_recipe'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsImagebuilderContainerRecipe = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsImagebuilderContainerRecipe, node, id)

export const useDataAwsImagebuilderContainerRecipes = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsImagebuilderContainerRecipe, node, id)
