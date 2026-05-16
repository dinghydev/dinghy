import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDxGateway } from './AwsDxGateway.tsx'

export const DataAwsDxGatewayInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
})

export const DataAwsDxGatewayOutputSchema = z.object({
  amazon_side_asn: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_account_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsDxGatewayInputProps =
  & z.input<typeof DataAwsDxGatewayInputSchema>
  & NodeProps

export type DataAwsDxGatewayOutputProps =
  & z.output<typeof DataAwsDxGatewayOutputSchema>
  & z.output<typeof DataAwsDxGatewayInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dx_gateway

export function DataAwsDxGateway(props: Partial<DataAwsDxGatewayInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDxGateway
      _type='aws_dx_gateway'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDxGatewayInputSchema}
      _outputSchema={DataAwsDxGatewayOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDxGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsDxGatewayOutputProps>(
    DataAwsDxGateway,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDxGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDxGatewayOutputProps>(
    DataAwsDxGateway,
    idFilter,
    baseNode,
    optional,
  )
