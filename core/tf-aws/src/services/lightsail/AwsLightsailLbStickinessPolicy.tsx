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

export const AwsLightsailLbStickinessPolicyInputSchema = TfMetaSchema.extend({
  cookie_duration: resolvableValue(z.number()),
  enabled: resolvableValue(z.boolean()),
  lb_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsLightsailLbStickinessPolicyOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsLightsailLbStickinessPolicyInputProps =
  & z.input<typeof AwsLightsailLbStickinessPolicyInputSchema>
  & NodeProps

export type AwsLightsailLbStickinessPolicyOutputProps =
  & z.output<typeof AwsLightsailLbStickinessPolicyOutputSchema>
  & z.output<typeof AwsLightsailLbStickinessPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_lb_stickiness_policy

export function AwsLightsailLbStickinessPolicy(
  props: Partial<AwsLightsailLbStickinessPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_lb_stickiness_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailLbStickinessPolicyInputSchema}
      _outputSchema={AwsLightsailLbStickinessPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailLbStickinessPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailLbStickinessPolicyOutputProps>(
    AwsLightsailLbStickinessPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailLbStickinessPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailLbStickinessPolicyOutputProps>(
    AwsLightsailLbStickinessPolicy,
    idFilter,
    baseNode,
    optional,
  )
