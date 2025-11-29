import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/imagebuilder_container_recipe

export const InputSchema = z.object({
  component: resolvableValue(z.object({
    component_arn: z.string(),
  })),
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
  id: resolvableValue(z.string().optional()),
  instance_configuration: resolvableValue(
    z.object({
      image: z.string().optional(),
    }).optional(),
  ),
  kms_key_id: resolvableValue(z.string().optional()),
  platform_override: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  working_directory: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  date_created: z.string().optional(),
  encrypted: z.boolean().optional(),
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

export function AwsImagebuilderContainerRecipe(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_container_recipe'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsImagebuilderContainerRecipe = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsImagebuilderContainerRecipe, node, id)

export const useAwsImagebuilderContainerRecipes = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsImagebuilderContainerRecipe, node, id)
