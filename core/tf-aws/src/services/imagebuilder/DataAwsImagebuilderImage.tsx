import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsImagebuilderImage } from './AwsImagebuilderImage.tsx'

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  build_version_arn: z.string().optional(),
  container_recipe_arn: z.string().optional(),
  date_created: z.string().optional(),
  distribution_configuration_arn: z.string().optional(),
  enhanced_image_metadata_enabled: z.boolean().optional(),
  image_recipe_arn: z.string().optional(),
  image_scanning_configuration: z.object({
    ecr_configuration: z.object({
      container_tags: z.set(z.string()),
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
  tags: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/imagebuilder_image

export function DataAwsImagebuilderImage(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsImagebuilderImage = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsImagebuilderImage,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsImagebuilderImages = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsImagebuilderImage,
    idFilter,
    baseNode,
    optional,
  )
