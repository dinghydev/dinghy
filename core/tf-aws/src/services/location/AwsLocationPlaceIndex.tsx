import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/location_place_index

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  create_time: z.string().optional(),
  index_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  update_time: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLocationPlaceIndex(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_location_place_index'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLocationPlaceIndex = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLocationPlaceIndex, node, id)

export const useAwsLocationPlaceIndexs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLocationPlaceIndex, node, id)
