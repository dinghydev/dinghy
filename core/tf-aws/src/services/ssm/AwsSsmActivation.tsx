import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssm_activation

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  activation_code: z.string().optional(),
  description: z.string().optional(),
  expiration_date: z.string().optional(),
  expired: z.boolean().optional(),
  iam_role: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  registration_count: z.number().optional(),
  registration_limit: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSsmActivation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_activation'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSsmActivation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSsmActivation, node, id)

export const useAwsSsmActivations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSsmActivation, node, id)
