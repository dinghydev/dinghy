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

export const AwsQuicksightIpRestrictionInputSchema = TfMetaSchema.extend({
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

export const AwsQuicksightIpRestrictionOutputSchema = z.object({})

export type AwsQuicksightIpRestrictionInputProps =
  & z.input<typeof AwsQuicksightIpRestrictionInputSchema>
  & NodeProps

export type AwsQuicksightIpRestrictionOutputProps =
  & z.output<typeof AwsQuicksightIpRestrictionOutputSchema>
  & z.output<typeof AwsQuicksightIpRestrictionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_ip_restriction

export function AwsQuicksightIpRestriction(
  props: Partial<AwsQuicksightIpRestrictionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_ip_restriction'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightIpRestrictionInputSchema}
      _outputSchema={AwsQuicksightIpRestrictionOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightIpRestriction = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQuicksightIpRestrictionOutputProps>(
    AwsQuicksightIpRestriction,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightIpRestrictions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQuicksightIpRestrictionOutputProps>(
    AwsQuicksightIpRestriction,
    idFilter,
    baseNode,
    optional,
  )
