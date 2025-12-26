import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSsmcontactsRotation } from './AwsSsmcontactsRotation.tsx'

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  contact_ids: z.string().array().optional(),
  name: z.string().optional(),
  recurrence: z.object({
    daily_settings: z.object({
      hour_of_day: z.number(),
      minute_of_hour: z.number(),
    }).array(),
    monthly_settings: z.object({
      day_of_month: z.number(),
      hand_off_time: z.object({
        hour_of_day: z.number(),
        minute_of_hour: z.number(),
      }).array(),
    }).array(),
    number_of_on_calls: z.number(),
    recurrence_multiplier: z.number(),
    shift_coverages: z.object({
      coverage_times: z.object({
        end: z.object({
          hour_of_day: z.number(),
          minute_of_hour: z.number(),
        }).array(),
        start: z.object({
          hour_of_day: z.number(),
          minute_of_hour: z.number(),
        }).array(),
      }).array(),
      map_block_key: z.string(),
    }).array(),
    weekly_settings: z.object({
      day_of_week: z.string(),
      hand_off_time: z.object({
        hour_of_day: z.number(),
        minute_of_hour: z.number(),
      }).array(),
    }).array(),
  }).array().optional(),
  start_time: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  time_zone_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ssmcontacts_rotation

export function DataAwsSsmcontactsRotation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSsmcontactsRotation
      _type='aws_ssmcontacts_rotation'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsmcontactsRotation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsSsmcontactsRotation,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSsmcontactsRotations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsSsmcontactsRotation,
    idFilter,
    baseNode,
    optional,
  )
