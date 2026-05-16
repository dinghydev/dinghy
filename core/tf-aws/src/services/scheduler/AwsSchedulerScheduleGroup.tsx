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

export const AwsSchedulerScheduleGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsSchedulerScheduleGroupOutputSchema = z.object({
  arn: z.string().optional(),
  creation_date: z.string().optional(),
  id: z.string().optional(),
  last_modification_date: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSchedulerScheduleGroupInputProps =
  & z.input<typeof AwsSchedulerScheduleGroupInputSchema>
  & NodeProps

export type AwsSchedulerScheduleGroupOutputProps =
  & z.output<typeof AwsSchedulerScheduleGroupOutputSchema>
  & z.output<typeof AwsSchedulerScheduleGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/scheduler_schedule_group

export function AwsSchedulerScheduleGroup(
  props: Partial<AwsSchedulerScheduleGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_scheduler_schedule_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSchedulerScheduleGroupInputSchema}
      _outputSchema={AwsSchedulerScheduleGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsSchedulerScheduleGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSchedulerScheduleGroupOutputProps>(
    AwsSchedulerScheduleGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSchedulerScheduleGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSchedulerScheduleGroupOutputProps>(
    AwsSchedulerScheduleGroup,
    idFilter,
    baseNode,
    optional,
  )
