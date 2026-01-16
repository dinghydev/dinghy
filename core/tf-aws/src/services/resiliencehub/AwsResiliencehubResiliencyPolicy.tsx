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

export const InputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  tier: resolvableValue(z.string()),
  data_location_constraint: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  policy: resolvableValue(
    z.object({
      az: z.object({
        rpo: z.string(),
        rto: z.string(),
      }).array().optional(),
      hardware: z.object({
        rpo: z.string(),
        rto: z.string(),
      }).array().optional(),
      region: z.object({
        rpo: z.string().optional(),
        rto: z.string().optional(),
      }).array().optional(),
      software: z.object({
        rpo: z.string(),
        rto: z.string(),
      }).array().optional(),
    }).array().optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/resiliencehub_resiliency_policy

export function AwsResiliencehubResiliencyPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsResiliencehubResiliencyPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsResiliencehubResiliencyPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsResiliencehubResiliencyPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsResiliencehubResiliencyPolicy,
    idFilter,
    baseNode,
    optional,
  )
