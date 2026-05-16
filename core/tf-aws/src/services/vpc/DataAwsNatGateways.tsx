import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsNatGatewaysInputSchema = TfMetaSchema.extend({
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

export const DataAwsNatGatewaysOutputSchema = z.object({
  id: z.string().optional(),
  ids: z.string().array().optional(),
})

export type DataAwsNatGatewaysInputProps =
  & z.input<typeof DataAwsNatGatewaysInputSchema>
  & NodeProps

export type DataAwsNatGatewaysOutputProps =
  & z.output<typeof DataAwsNatGatewaysOutputSchema>
  & z.output<typeof DataAwsNatGatewaysInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/nat_gateways

export function DataAwsNatGateways(
  props: Partial<DataAwsNatGatewaysInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_nat_gateways'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsNatGatewaysInputSchema}
      _outputSchema={DataAwsNatGatewaysOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsNatGatewayss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsNatGatewaysOutputProps>(
    DataAwsNatGateways,
    idFilter,
    baseNode,
    optional,
  )
