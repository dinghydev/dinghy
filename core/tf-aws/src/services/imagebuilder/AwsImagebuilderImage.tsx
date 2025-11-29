import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/imagebuilder_image

export const InputSchema = z.object({
  infrastructure_configuration_arn: resolvableValue(z.string()),
  container_recipe_arn: resolvableValue(z.string().optional()),
  distribution_configuration_arn: resolvableValue(z.string().optional()),
  enhanced_image_metadata_enabled: resolvableValue(z.boolean().optional()),
  execution_role: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  image_recipe_arn: resolvableValue(z.string().optional()),
  image_scanning_configuration: resolvableValue(
    z.object({
      image_scanning_enabled: z.boolean().optional(),
    }).optional(),
  ),
  image_tests_configuration: resolvableValue(
    z.object({
      image_tests_enabled: z.boolean().optional(),
      timeout_minutes: z.number().optional(),
    }).optional(),
  ),
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
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  date_created: z.string().optional(),
  name: z.string().optional(),
  os_version: z.string().optional(),
  output_resources: z.object({
    amis: z.object({
      account_id: z.string(),
      description: z.string(),
      image: z.string(),
      name: z.string(),
      region: z.string(),
    }).array(),
    containers: z.object({
      image_uris: z.string().array(),
      region: z.string(),
    }).array(),
  }).array().optional(),
  platform: z.string().optional(),
  region: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
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

export function AwsImagebuilderImage(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_image'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsImagebuilderImage = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsImagebuilderImage, node, id)

export const useAwsImagebuilderImages = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsImagebuilderImage, node, id)
