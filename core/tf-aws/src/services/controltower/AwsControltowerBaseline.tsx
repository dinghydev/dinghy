import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/controltower_baseline

export const InputSchema = z.object({
  baseline_identifier: resolvableValue(z.string()),
  baseline_version: resolvableValue(z.string()),
  operation_identifier: resolvableValue(z.string()),
  target_identifier: resolvableValue(z.string()),
  parameters: resolvableValue(
    z.object({
      key: z.string(),
      value: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsControltowerBaseline(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_controltower_baseline'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsControltowerBaseline = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsControltowerBaseline, node, id)

export const useAwsControltowerBaselines = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsControltowerBaseline, node, id)
