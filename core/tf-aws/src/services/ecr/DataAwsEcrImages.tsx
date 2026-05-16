import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEcrImagesInputSchema = TfMetaSchema.extend({
  repository_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  registry_id: resolvableValue(z.string().optional()),
})

export const DataAwsEcrImagesOutputSchema = z.object({
  image_ids: z.object({
    image_digest: z.string(),
    image_tag: z.string(),
  }).array().optional(),
})

export type DataAwsEcrImagesInputProps =
  & z.input<typeof DataAwsEcrImagesInputSchema>
  & NodeProps

export type DataAwsEcrImagesOutputProps =
  & z.output<typeof DataAwsEcrImagesOutputSchema>
  & z.output<typeof DataAwsEcrImagesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ecr_images

export function DataAwsEcrImages(props: Partial<DataAwsEcrImagesInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_images'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEcrImagesInputSchema}
      _outputSchema={DataAwsEcrImagesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEcrImagess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEcrImagesOutputProps>(
    DataAwsEcrImages,
    idFilter,
    baseNode,
    optional,
  )
