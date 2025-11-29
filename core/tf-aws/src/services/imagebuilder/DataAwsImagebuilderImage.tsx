import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsImagebuilderImage } from './AwsImagebuilderImage.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/imagebuilder_image

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  build_version_arn: z.string().optional(),
  container_recipe_arn: z.string().optional(),
  date_created: z.string().optional(),
  distribution_configuration_arn: z.string().optional(),
  enhanced_image_metadata_enabled: z.boolean().optional(),
  image_recipe_arn: z.string().optional(),
  image_scanning_configuration: z.object({
    ecr_configuration: z.object({
      container_tags: z.string().array(),
      repository_name: z.string(),
    }).array(),
    image_scanning_enabled: z.boolean(),
  }).array().optional(),
  image_tests_configuration: z.object({
    image_tests_enabled: z.boolean(),
    timeout_minutes: z.number(),
  }).array().optional(),
  infrastructure_configuration_arn: z.string().optional(),
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
  tags: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsImagebuilderImage(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsImagebuilderImage
      _type='aws_imagebuilder_image'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsImagebuilderImage = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsImagebuilderImage, node, id)

export const useDataAwsImagebuilderImages = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsImagebuilderImage, node, id)
