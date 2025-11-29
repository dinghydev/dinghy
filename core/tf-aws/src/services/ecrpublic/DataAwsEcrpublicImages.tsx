import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ecrpublic_images

export const InputSchema = z.object({
  image_ids: resolvableValue(
    z.object({
      image_digest: z.string().optional(),
      image_tag: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  images: z.object({
    artifact_media_type: z.string(),
    image_digest: z.string(),
    image_manifest_media_type: z.string(),
    image_pushed_at: z.string(),
    image_size_in_bytes: z.number(),
    image_tags: z.string().array(),
    registry_id: z.string(),
    repository_name: z.string(),
  }).array().optional(),
  registry_id: z.string().optional(),
  repository_name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEcrpublicImages(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecrpublic_images'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEcrpublicImagess = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsEcrpublicImages, node, id)
