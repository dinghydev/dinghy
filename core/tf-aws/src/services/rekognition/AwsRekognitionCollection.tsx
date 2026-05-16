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

export const AwsRekognitionCollectionInputSchema = TfMetaSchema.extend({
  collection_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRekognitionCollectionOutputSchema = z.object({
  arn: z.string().optional(),
  face_model_version: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRekognitionCollectionInputProps =
  & z.input<typeof AwsRekognitionCollectionInputSchema>
  & NodeProps

export type AwsRekognitionCollectionOutputProps =
  & z.output<typeof AwsRekognitionCollectionOutputSchema>
  & z.output<typeof AwsRekognitionCollectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/rekognition_collection

export function AwsRekognitionCollection(
  props: Partial<AwsRekognitionCollectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rekognition_collection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRekognitionCollectionInputSchema}
      _outputSchema={AwsRekognitionCollectionOutputSchema}
      {...props}
    />
  )
}

export const useAwsRekognitionCollection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRekognitionCollectionOutputProps>(
    AwsRekognitionCollection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRekognitionCollections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRekognitionCollectionOutputProps>(
    AwsRekognitionCollection,
    idFilter,
    baseNode,
    optional,
  )
