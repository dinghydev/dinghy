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
  contact_ids: resolvableValue(z.string().array()),
  id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  time_zone_id: resolvableValue(z.string()),
  recurrence: resolvableValue(
    z.object({
      number_of_on_calls: z.number(),
      recurrence_multiplier: z.number(),
      daily_settings: z.object({
        hour_of_day: z.number(),
        minute_of_hour: z.number(),
      }).array().optional(),
      monthly_settings: z.object({
        day_of_month: z.number(),
        hand_off_time: z.object({
          hour_of_day: z.number(),
          minute_of_hour: z.number(),
        }).array().optional(),
      }).array().optional(),
      shift_coverages: z.object({
        map_block_key: z.string(),
        coverage_times: z.object({
          end: z.object({
            hour_of_day: z.number(),
            minute_of_hour: z.number(),
          }).array().optional(),
          start: z.object({
            hour_of_day: z.number(),
            minute_of_hour: z.number(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      weekly_settings: z.object({
        day_of_week: z.string(),
        hand_off_time: z.object({
          hour_of_day: z.number(),
          minute_of_hour: z.number(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  start_time: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssmcontacts_rotation

export function AwsSsmcontactsRotation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssmcontacts_rotation'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmcontactsRotation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsSsmcontactsRotation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmcontactsRotations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSsmcontactsRotation,
    idFilter,
    baseNode,
    optional,
  )
