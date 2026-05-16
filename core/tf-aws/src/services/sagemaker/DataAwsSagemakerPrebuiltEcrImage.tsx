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

export const DataAwsSagemakerPrebuiltEcrImageInputSchema = TfMetaSchema.extend({
  repository_name: resolvableValue(z.string()),
  dns_suffix: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  image_tag: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSagemakerPrebuiltEcrImageOutputSchema = z.object({
  registry_id: z.string().optional(),
  registry_path: z.string().optional(),
})

export type DataAwsSagemakerPrebuiltEcrImageInputProps =
  & z.input<typeof DataAwsSagemakerPrebuiltEcrImageInputSchema>
  & NodeProps

export type DataAwsSagemakerPrebuiltEcrImageOutputProps =
  & z.output<typeof DataAwsSagemakerPrebuiltEcrImageOutputSchema>
  & z.output<typeof DataAwsSagemakerPrebuiltEcrImageInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/sagemaker_prebuilt_ecr_image

export function DataAwsSagemakerPrebuiltEcrImage(
  props: Partial<DataAwsSagemakerPrebuiltEcrImageInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_prebuilt_ecr_image'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSagemakerPrebuiltEcrImageInputSchema}
      _outputSchema={DataAwsSagemakerPrebuiltEcrImageOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSagemakerPrebuiltEcrImage = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSagemakerPrebuiltEcrImageOutputProps>(
    DataAwsSagemakerPrebuiltEcrImage,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSagemakerPrebuiltEcrImages = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSagemakerPrebuiltEcrImageOutputProps>(
    DataAwsSagemakerPrebuiltEcrImage,
    idFilter,
    baseNode,
    optional,
  )
