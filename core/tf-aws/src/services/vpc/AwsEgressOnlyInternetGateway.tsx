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

export const AwsEgressOnlyInternetGatewayInputSchema = TfMetaSchema.extend({
  vpc_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsEgressOnlyInternetGatewayOutputSchema = z.object({
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEgressOnlyInternetGatewayInputProps =
  & z.input<typeof AwsEgressOnlyInternetGatewayInputSchema>
  & NodeProps

export type AwsEgressOnlyInternetGatewayOutputProps =
  & z.output<typeof AwsEgressOnlyInternetGatewayOutputSchema>
  & z.output<typeof AwsEgressOnlyInternetGatewayInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/egress_only_internet_gateway

export function AwsEgressOnlyInternetGateway(
  props: Partial<AwsEgressOnlyInternetGatewayInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_egress_only_internet_gateway'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEgressOnlyInternetGatewayInputSchema}
      _outputSchema={AwsEgressOnlyInternetGatewayOutputSchema}
      {...props}
    />
  )
}

export const useAwsEgressOnlyInternetGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEgressOnlyInternetGatewayOutputProps>(
    AwsEgressOnlyInternetGateway,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEgressOnlyInternetGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEgressOnlyInternetGatewayOutputProps>(
    AwsEgressOnlyInternetGateway,
    idFilter,
    baseNode,
    optional,
  )
