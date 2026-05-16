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

export const DataAwsSsmcontactsRotationInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSsmcontactsRotationOutputSchema = z.object({
  contact_ids: z.string().array().optional(),
  id: z.string().optional(),
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

export type DataAwsSsmcontactsRotationInputProps =
  & z.input<typeof DataAwsSsmcontactsRotationInputSchema>
  & NodeProps

export type DataAwsSsmcontactsRotationOutputProps =
  & z.output<typeof DataAwsSsmcontactsRotationOutputSchema>
  & z.output<typeof DataAwsSsmcontactsRotationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssmcontacts_rotation

export function DataAwsSsmcontactsRotation(
  props: Partial<DataAwsSsmcontactsRotationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSsmcontactsRotation
      _type='aws_ssmcontacts_rotation'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsmcontactsRotationInputSchema}
      _outputSchema={DataAwsSsmcontactsRotationOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsmcontactsRotation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSsmcontactsRotationOutputProps>(
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
  useTypedNodes<DataAwsSsmcontactsRotationOutputProps>(
    DataAwsSsmcontactsRotation,
    idFilter,
    baseNode,
    optional,
  )
