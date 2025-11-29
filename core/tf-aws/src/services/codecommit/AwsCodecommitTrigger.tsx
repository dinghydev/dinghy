import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/codecommit_trigger

export const InputSchema = z.object({
  repository_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  trigger: resolvableValue(
    z.object({
      branches: z.string().array().optional(),
      custom_data: z.string().optional(),
      destination_arn: z.string(),
      events: z.string().array(),
      name: z.string(),
    }).array(),
  ),
})

export const OutputSchema = z.object({
  configuration_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCodecommitTrigger(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codecommit_trigger'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCodecommitTrigger = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCodecommitTrigger, node, id)

export const useAwsCodecommitTriggers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCodecommitTrigger, node, id)
