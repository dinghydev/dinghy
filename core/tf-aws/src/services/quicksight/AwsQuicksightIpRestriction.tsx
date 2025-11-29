import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/quicksight_ip_restriction

export const InputSchema = z.object({
  enabled: resolvableValue(z.boolean()),
  aws_account_id: resolvableValue(z.string().optional()),
  ip_restriction_rule_map: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  vpc_endpoint_id_restriction_rule_map: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  vpc_id_restriction_rule_map: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsQuicksightIpRestriction(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_ip_restriction'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightIpRestriction = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsQuicksightIpRestriction, node, id)

export const useAwsQuicksightIpRestrictions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsQuicksightIpRestriction, node, id)
