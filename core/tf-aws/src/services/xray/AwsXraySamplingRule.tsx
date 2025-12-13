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

export const InputSchema = z.object({
  fixed_rate: resolvableValue(z.number()),
  host: resolvableValue(z.string()),
  http_method: resolvableValue(z.string()),
  priority: resolvableValue(z.number()),
  reservoir_size: resolvableValue(z.number()),
  resource_arn: resolvableValue(z.string()),
  service_name: resolvableValue(z.string()),
  service_type: resolvableValue(z.string()),
  url_path: resolvableValue(z.string()),
  version: resolvableValue(z.number()),
  attributes: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
  rule_name: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/xray_sampling_rule

export function AwsXraySamplingRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_xray_sampling_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsXraySamplingRule = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsXraySamplingRule, idFilter, baseNode)

export const useAwsXraySamplingRules = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsXraySamplingRule, idFilter, baseNode)
