import {
  camelCaseToWords,
  type NodeProps,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsRoute53ZonesInputSchema = TfMetaSchema.extend({})

export const DataAwsRoute53ZonesOutputSchema = z.object({
  id: z.string().optional(),
  ids: z.string().array().optional(),
})

export type DataAwsRoute53ZonesInputProps =
  & z.input<typeof DataAwsRoute53ZonesInputSchema>
  & NodeProps

export type DataAwsRoute53ZonesOutputProps =
  & z.output<typeof DataAwsRoute53ZonesOutputSchema>
  & z.output<typeof DataAwsRoute53ZonesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/route53_zones

export function DataAwsRoute53Zones(
  props: Partial<DataAwsRoute53ZonesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_zones'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRoute53ZonesInputSchema}
      _outputSchema={DataAwsRoute53ZonesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRoute53Zoness = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRoute53ZonesOutputProps>(
    DataAwsRoute53Zones,
    idFilter,
    baseNode,
    optional,
  )
