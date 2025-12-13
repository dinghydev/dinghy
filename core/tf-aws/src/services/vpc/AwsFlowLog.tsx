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
  deliver_cross_account_role: resolvableValue(z.string().optional()),
  destination_options: resolvableValue(
    z.object({
      file_format: z.string().optional(),
      hive_compatible_partitions: z.boolean().optional(),
      per_hour_partition: z.boolean().optional(),
    }).optional(),
  ),
  eni_id: resolvableValue(z.string().optional()),
  iam_role_arn: resolvableValue(z.string().optional()),
  log_destination: resolvableValue(z.string().optional()),
  log_destination_type: resolvableValue(z.string().optional()),
  log_format: resolvableValue(z.string().optional()),
  max_aggregation_interval: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  subnet_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  traffic_type: resolvableValue(z.string().optional()),
  transit_gateway_attachment_id: resolvableValue(z.string().optional()),
  transit_gateway_id: resolvableValue(z.string().optional()),
  vpc_id: resolvableValue(z.string().optional()),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/flow_log

export function AwsFlowLog(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_flow_log'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFlowLog = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsFlowLog, idFilter, baseNode)

export const useAwsFlowLogs = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsFlowLog, idFilter, baseNode)
