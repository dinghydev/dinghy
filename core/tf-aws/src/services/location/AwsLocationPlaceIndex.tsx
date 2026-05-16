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

export const AwsLocationPlaceIndexInputSchema = TfMetaSchema.extend({
  data_source: resolvableValue(z.string()),
  index_name: resolvableValue(z.string()),
  data_source_configuration: resolvableValue(
    z.object({
      intended_use: z.string().optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsLocationPlaceIndexOutputSchema = z.object({
  create_time: z.string().optional(),
  index_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  update_time: z.string().optional(),
})

export type AwsLocationPlaceIndexInputProps =
  & z.input<typeof AwsLocationPlaceIndexInputSchema>
  & NodeProps

export type AwsLocationPlaceIndexOutputProps =
  & z.output<typeof AwsLocationPlaceIndexOutputSchema>
  & z.output<typeof AwsLocationPlaceIndexInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/location_place_index

export function AwsLocationPlaceIndex(
  props: Partial<AwsLocationPlaceIndexInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_location_place_index'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLocationPlaceIndexInputSchema}
      _outputSchema={AwsLocationPlaceIndexOutputSchema}
      {...props}
    />
  )
}

export const useAwsLocationPlaceIndex = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLocationPlaceIndexOutputProps>(
    AwsLocationPlaceIndex,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLocationPlaceIndexs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLocationPlaceIndexOutputProps>(
    AwsLocationPlaceIndex,
    idFilter,
    baseNode,
    optional,
  )
