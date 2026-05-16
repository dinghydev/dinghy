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

export const DataAwsEcrImageInputSchema = TfMetaSchema.extend({
  repository_name: resolvableValue(z.string()),
  image_digest: resolvableValue(z.string().optional()),
  image_tag: resolvableValue(z.string().optional()),
  most_recent: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  registry_id: resolvableValue(z.string().optional()),
})

export const DataAwsEcrImageOutputSchema = z.object({
  id: z.string().optional(),
  image_pushed_at: z.number().optional(),
  image_size_in_bytes: z.number().optional(),
  image_tags: z.string().array().optional(),
  image_uri: z.string().optional(),
})

export type DataAwsEcrImageInputProps =
  & z.input<typeof DataAwsEcrImageInputSchema>
  & NodeProps

export type DataAwsEcrImageOutputProps =
  & z.output<typeof DataAwsEcrImageOutputSchema>
  & z.output<typeof DataAwsEcrImageInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ecr_image

export function DataAwsEcrImage(props: Partial<DataAwsEcrImageInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_image'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEcrImageInputSchema}
      _outputSchema={DataAwsEcrImageOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEcrImage = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEcrImageOutputProps>(
    DataAwsEcrImage,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEcrImages = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEcrImageOutputProps>(
    DataAwsEcrImage,
    idFilter,
    baseNode,
    optional,
  )
