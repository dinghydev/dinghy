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

export const AwsDxGatewayInputSchema = TfMetaSchema.extend({
  amazon_side_asn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsDxGatewayOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_account_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsDxGatewayImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type AwsDxGatewayInputProps =
  & z.input<typeof AwsDxGatewayInputSchema>
  & z.input<typeof AwsDxGatewayImportSchema>
  & NodeProps

export type AwsDxGatewayOutputProps =
  & z.output<typeof AwsDxGatewayOutputSchema>
  & z.output<typeof AwsDxGatewayInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dx_gateway

export function AwsDxGateway(props: Partial<AwsDxGatewayInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_gateway'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDxGatewayInputSchema}
      _outputSchema={AwsDxGatewayOutputSchema}
      _importSchema={AwsDxGatewayImportSchema}
      {...props}
    />
  )
}

export const useAwsDxGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDxGatewayOutputProps>(
    AwsDxGateway,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDxGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDxGatewayOutputProps>(
    AwsDxGateway,
    idFilter,
    baseNode,
    optional,
  )
