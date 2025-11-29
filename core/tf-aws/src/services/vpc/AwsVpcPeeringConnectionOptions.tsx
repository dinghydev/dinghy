import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_peering_connection_options

export const InputSchema = z.object({
  vpc_peering_connection_id: resolvableValue(z.string()),
  accepter: resolvableValue(
    z.object({
      allow_remote_vpc_dns_resolution: z.boolean().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  requester: resolvableValue(
    z.object({
      allow_remote_vpc_dns_resolution: z.boolean().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpcPeeringConnectionOptions(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_peering_connection_options'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcPeeringConnectionOptions = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVpcPeeringConnectionOptions, node, id)
