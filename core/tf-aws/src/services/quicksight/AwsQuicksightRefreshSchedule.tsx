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

export const AwsQuicksightRefreshScheduleInputSchema = TfMetaSchema.extend({
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
})

export const AwsQuicksightRefreshScheduleOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsQuicksightRefreshScheduleInputProps =
  & z.input<typeof AwsQuicksightRefreshScheduleInputSchema>
  & NodeProps

export type AwsQuicksightRefreshScheduleOutputProps =
  & z.output<typeof AwsQuicksightRefreshScheduleOutputSchema>
  & z.output<typeof AwsQuicksightRefreshScheduleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_refresh_schedule

export function AwsQuicksightRefreshSchedule(
  props: Partial<AwsQuicksightRefreshScheduleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_refresh_schedule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightRefreshScheduleInputSchema}
      _outputSchema={AwsQuicksightRefreshScheduleOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightRefreshSchedule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQuicksightRefreshScheduleOutputProps>(
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
  useTypedNodes<AwsQuicksightRefreshScheduleOutputProps>(
    AwsQuicksightRefreshSchedule,
    idFilter,
    baseNode,
    optional,
  )
