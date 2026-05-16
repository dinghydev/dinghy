import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsVpcPeeringConnectionOptionsInputSchema = TfMetaSchema.extend({
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

export const AwsVpcPeeringConnectionOptionsOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsVpcPeeringConnectionOptionsInputProps =
  & z.input<typeof AwsVpcPeeringConnectionOptionsInputSchema>
  & NodeProps

export type AwsVpcPeeringConnectionOptionsOutputProps =
  & z.output<typeof AwsVpcPeeringConnectionOptionsOutputSchema>
  & z.output<typeof AwsVpcPeeringConnectionOptionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_peering_connection_options

export function AwsVpcPeeringConnectionOptions(
  props: Partial<AwsVpcPeeringConnectionOptionsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_peering_connection_options'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcPeeringConnectionOptionsInputSchema}
      _outputSchema={AwsVpcPeeringConnectionOptionsOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcPeeringConnectionOptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcPeeringConnectionOptionsOutputProps>(
    AwsVpcPeeringConnectionOptions,
    idFilter,
    baseNode,
    optional,
  )
