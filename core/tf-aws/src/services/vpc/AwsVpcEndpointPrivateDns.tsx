import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsVpcEndpointPrivateDnsInputSchema = TfMetaSchema.extend({
  private_dns_enabled: resolvableValue(z.boolean()),
  vpc_endpoint_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsVpcEndpointPrivateDnsOutputSchema = z.object({})

export type AwsVpcEndpointPrivateDnsInputProps =
  & z.input<typeof AwsVpcEndpointPrivateDnsInputSchema>
  & NodeProps

export type AwsVpcEndpointPrivateDnsOutputProps =
  & z.output<typeof AwsVpcEndpointPrivateDnsOutputSchema>
  & z.output<typeof AwsVpcEndpointPrivateDnsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_endpoint_private_dns

export function AwsVpcEndpointPrivateDns(
  props: Partial<AwsVpcEndpointPrivateDnsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_endpoint_private_dns'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcEndpointPrivateDnsInputSchema}
      _outputSchema={AwsVpcEndpointPrivateDnsOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcEndpointPrivateDnss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcEndpointPrivateDnsOutputProps>(
    AwsVpcEndpointPrivateDns,
    idFilter,
    baseNode,
    optional,
  )
