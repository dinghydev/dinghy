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

export const AwsProxyProtocolPolicyInputSchema = TfMetaSchema.extend({
  instance_ports: resolvableValue(z.string().array()),
  load_balancer: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsProxyProtocolPolicyOutputSchema = z.object({
  id: z.string().optional(),
  load_balancer: z.string().optional(),
})

export type AwsProxyProtocolPolicyInputProps =
  & z.input<typeof AwsProxyProtocolPolicyInputSchema>
  & NodeProps

export type AwsProxyProtocolPolicyOutputProps =
  & z.output<typeof AwsProxyProtocolPolicyOutputSchema>
  & z.output<typeof AwsProxyProtocolPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/proxy_protocol_policy

export function AwsProxyProtocolPolicy(
  props: Partial<AwsProxyProtocolPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_proxy_protocol_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsProxyProtocolPolicyInputSchema}
      _outputSchema={AwsProxyProtocolPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsProxyProtocolPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsProxyProtocolPolicyOutputProps>(
    AwsProxyProtocolPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsProxyProtocolPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsProxyProtocolPolicyOutputProps>(
    AwsProxyProtocolPolicy,
    idFilter,
    baseNode,
    optional,
  )
