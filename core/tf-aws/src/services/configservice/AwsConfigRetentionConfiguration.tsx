import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/config_retention_configuration

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  retention_period_in_days: resolvableValue(z.number()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsConfigRetentionConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_retention_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConfigRetentionConfiguration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsConfigRetentionConfiguration, node, id)

export const useAwsConfigRetentionConfigurations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsConfigRetentionConfiguration, node, id)
