import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route53_records_exclusive

export const InputSchema = z.object({
  zone_id: resolvableValue(z.string()),
  resource_record_set: resolvableValue(
    z.object({
      failover: z.string().optional(),
      health_check_id: z.string().optional(),
      multi_value_answer: z.boolean().optional(),
      name: z.string(),
      region: z.string().optional(),
      set_identifier: z.string().optional(),
      traffic_policy_instance_id: z.string().optional(),
      ttl: z.number().optional(),
      type: z.string().optional(),
      weight: z.number().optional(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRoute53RecordsExclusive(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_records_exclusive'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53RecordsExclusive = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRoute53RecordsExclusive, node, id)

export const useAwsRoute53RecordsExclusives = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRoute53RecordsExclusive, node, id)
