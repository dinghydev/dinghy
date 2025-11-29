import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ses_configuration_set

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  delivery_options: resolvableValue(
    z.object({
      tls_policy: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  reputation_metrics_enabled: resolvableValue(z.boolean().optional()),
  sending_enabled: resolvableValue(z.boolean().optional()),
  tracking_options: resolvableValue(
    z.object({
      custom_redirect_domain: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  last_fresh_start: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSesConfigurationSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_configuration_set'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSesConfigurationSet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSesConfigurationSet, node, id)

export const useAwsSesConfigurationSets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSesConfigurationSet, node, id)
