import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEcrpublicImagesInputSchema = TfMetaSchema.extend({
  repository_name: resolvableValue(z.string()),
  image_ids: resolvableValue(
    z.object({
      image_digest: z.string().optional(),
      image_tag: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  registry_id: resolvableValue(z.string().optional()),
})

export const DataAwsEcrpublicImagesOutputSchema = z.object({
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

export type DataAwsEcrpublicImagesInputProps =
  & z.input<typeof DataAwsEcrpublicImagesInputSchema>
  & NodeProps

export type DataAwsEcrpublicImagesOutputProps =
  & z.output<typeof DataAwsEcrpublicImagesOutputSchema>
  & z.output<typeof DataAwsEcrpublicImagesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ecrpublic_images

export function DataAwsEcrpublicImages(
  props: Partial<DataAwsEcrpublicImagesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecrpublic_images'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEcrpublicImagesInputSchema}
      _outputSchema={DataAwsEcrpublicImagesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEcrpublicImagess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEcrpublicImagesOutputProps>(
    DataAwsEcrpublicImages,
    idFilter,
    baseNode,
    optional,
  )
