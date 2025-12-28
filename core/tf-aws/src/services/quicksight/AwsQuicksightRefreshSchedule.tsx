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
  data_set_id: resolvableValue(z.string()),
  schedule_id: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  schedule: resolvableValue(
    z.object({
      refresh_type: z.string(),
      start_after_date_time: z.string().optional(),
      schedule_frequency: z.object({
        interval: z.string(),
        time_of_the_day: z.string().optional(),
        timezone: z.string().optional(),
        refresh_on_day: z.object({
          day_of_month: z.string().optional(),
          day_of_week: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/quicksight_refresh_schedule

export function AwsQuicksightRefreshSchedule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsQuicksightRefreshSchedule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsQuicksightRefreshSchedule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightRefreshSchedules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsQuicksightRefreshSchedule,
    idFilter,
    baseNode,
    optional,
  )
