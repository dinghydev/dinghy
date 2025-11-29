import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLocationMap } from './AwsLocationMap.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/location_map

export const InputSchema = z.object({
  map_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  configuration: z.object({
    style: z.string(),
  }).array().optional(),
  create_time: z.string().optional(),
  description: z.string().optional(),
  map_arn: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  update_time: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsLocationMap(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLocationMap
      _type='aws_location_map'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLocationMap = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsLocationMap, node, id)

export const useDataAwsLocationMaps = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsLocationMap, node, id)
