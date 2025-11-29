import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/quicksight_refresh_schedule

export const InputSchema = z.object({
  data_set_id: resolvableValue(z.string()),
  schedule_id: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  schedule: resolvableValue(
    z.object({
      refresh_type: z.string(),
      start_after_date_time: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsQuicksightRefreshSchedule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_refresh_schedule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightRefreshSchedule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsQuicksightRefreshSchedule, node, id)

export const useAwsQuicksightRefreshSchedules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsQuicksightRefreshSchedule, node, id)
