import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLocationMap } from './AwsLocationMap.tsx'

export const DataAwsLocationMapInputSchema = TfMetaSchema.extend({
  map_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsLocationMapOutputSchema = z.object({
  configuration: z.object({
    style: z.string(),
  }).array().optional(),
  create_time: z.string().optional(),
  description: z.string().optional(),
  map_arn: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  update_time: z.string().optional(),
})

export type DataAwsLocationMapInputProps =
  & z.input<typeof DataAwsLocationMapInputSchema>
  & NodeProps

export type DataAwsLocationMapOutputProps =
  & z.output<typeof DataAwsLocationMapOutputSchema>
  & z.output<typeof DataAwsLocationMapInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/location_map

export function DataAwsLocationMap(
  props: Partial<DataAwsLocationMapInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLocationMap
      _type='aws_location_map'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLocationMapInputSchema}
      _outputSchema={DataAwsLocationMapOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLocationMap = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsLocationMapOutputProps>(
    DataAwsLocationMap,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsLocationMaps = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLocationMapOutputProps>(
    DataAwsLocationMap,
    idFilter,
    baseNode,
    optional,
  )
