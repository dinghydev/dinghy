import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsRouteTablesInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
  vpc_id: resolvableValue(z.string().optional()),
})

export const DataAwsRouteTablesOutputSchema = z.object({
  id: z.string().optional(),
  ids: z.string().array().optional(),
})

export type DataAwsRouteTablesInputProps =
  & z.input<typeof DataAwsRouteTablesInputSchema>
  & NodeProps

export type DataAwsRouteTablesOutputProps =
  & z.output<typeof DataAwsRouteTablesOutputSchema>
  & z.output<typeof DataAwsRouteTablesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/route_tables

export function DataAwsRouteTables(
  props: Partial<DataAwsRouteTablesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route_tables'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRouteTablesInputSchema}
      _outputSchema={DataAwsRouteTablesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRouteTabless = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRouteTablesOutputProps>(
    DataAwsRouteTables,
    idFilter,
    baseNode,
    optional,
  )
