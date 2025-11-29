import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLocationPlaceIndex } from './AwsLocationPlaceIndex.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/location_place_index

export const InputSchema = z.object({
  index_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  create_time: z.string().optional(),
  data_source: z.string().optional(),
  data_source_configuration: z.object({
    intended_use: z.string(),
  }).array().optional(),
  description: z.string().optional(),
  index_arn: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  update_time: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsLocationPlaceIndex(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLocationPlaceIndex
      _type='aws_location_place_index'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLocationPlaceIndex = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsLocationPlaceIndex, node, id)

export const useDataAwsLocationPlaceIndexs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsLocationPlaceIndex, node, id)
