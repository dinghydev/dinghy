import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/resiliencehub_resiliency_policy

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  tier: resolvableValue(z.string()),
  data_location_constraint: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  policy: resolvableValue(
    z.object({
      az: z.object({
        rpo: z.string(),
        rto: z.string(),
      }).optional(),
      hardware: z.object({
        rpo: z.string(),
        rto: z.string(),
      }).optional(),
      region: z.object({
        rpo: z.string().optional(),
        rto: z.string().optional(),
      }).optional(),
      software: z.object({
        rpo: z.string(),
        rto: z.string(),
      }).optional(),
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
  estimated_cost_tier: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsResiliencehubResiliencyPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_resiliencehub_resiliency_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsResiliencehubResiliencyPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsResiliencehubResiliencyPolicy, node, id)

export const useAwsResiliencehubResiliencyPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsResiliencehubResiliencyPolicy, node, id)
