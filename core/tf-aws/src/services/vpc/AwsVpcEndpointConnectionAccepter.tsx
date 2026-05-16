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

export const AwsVpcEndpointConnectionAccepterInputSchema = TfMetaSchema.extend({
  vpc_endpoint_id: resolvableValue(z.string()),
  vpc_endpoint_service_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsVpcEndpointConnectionAccepterOutputSchema = z.object({
  id: z.string().optional(),
  vpc_endpoint_state: z.string().optional(),
})

export type AwsVpcEndpointConnectionAccepterInputProps =
  & z.input<typeof AwsVpcEndpointConnectionAccepterInputSchema>
  & NodeProps

export type AwsVpcEndpointConnectionAccepterOutputProps =
  & z.output<typeof AwsVpcEndpointConnectionAccepterOutputSchema>
  & z.output<typeof AwsVpcEndpointConnectionAccepterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_endpoint_connection_accepter

export function AwsVpcEndpointConnectionAccepter(
  props: Partial<AwsVpcEndpointConnectionAccepterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_endpoint_connection_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcEndpointConnectionAccepterInputSchema}
      _outputSchema={AwsVpcEndpointConnectionAccepterOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcEndpointConnectionAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcEndpointConnectionAccepterOutputProps>(
    AwsVpcEndpointConnectionAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcEndpointConnectionAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcEndpointConnectionAccepterOutputProps>(
    AwsVpcEndpointConnectionAccepter,
    idFilter,
    baseNode,
    optional,
  )
