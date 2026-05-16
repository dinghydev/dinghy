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

export const AwsLightsailLbHttpsRedirectionPolicyInputSchema = TfMetaSchema
  .extend({
    enabled: resolvableValue(z.boolean()),
    lb_name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsLightsailLbHttpsRedirectionPolicyOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsLightsailLbHttpsRedirectionPolicyInputProps =
  & z.input<typeof AwsLightsailLbHttpsRedirectionPolicyInputSchema>
  & NodeProps

export type AwsLightsailLbHttpsRedirectionPolicyOutputProps =
  & z.output<typeof AwsLightsailLbHttpsRedirectionPolicyOutputSchema>
  & z.output<typeof AwsLightsailLbHttpsRedirectionPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_lb_https_redirection_policy

export function AwsLightsailLbHttpsRedirectionPolicy(
  props: Partial<AwsLightsailLbHttpsRedirectionPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_lb_https_redirection_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailLbHttpsRedirectionPolicyInputSchema}
      _outputSchema={AwsLightsailLbHttpsRedirectionPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailLbHttpsRedirectionPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailLbHttpsRedirectionPolicyOutputProps>(
    AwsLightsailLbHttpsRedirectionPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailLbHttpsRedirectionPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailLbHttpsRedirectionPolicyOutputProps>(
    AwsLightsailLbHttpsRedirectionPolicy,
    idFilter,
    baseNode,
    optional,
  )
