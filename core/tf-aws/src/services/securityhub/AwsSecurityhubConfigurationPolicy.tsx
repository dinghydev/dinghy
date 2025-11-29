import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/securityhub_configuration_policy

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  configuration_policy: resolvableValue(z.object({
    enabled_standard_arns: z.string().array().optional(),
    service_enabled: z.boolean(),
  })),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
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

export function AwsSecurityhubConfigurationPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_configuration_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubConfigurationPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSecurityhubConfigurationPolicy, node, id)

export const useAwsSecurityhubConfigurationPolicys = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsSecurityhubConfigurationPolicy, node, id)
