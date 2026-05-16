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

export const AwsAppstreamFleetInputSchema = TfMetaSchema.extend({
  compute_capacity: resolvableValue(z.object({
    available: z.number().optional(),
    desired_instances: z.number().optional(),
    desired_sessions: z.number().optional(),
    in_use: z.number().optional(),
    running: z.number().optional(),
  })),
  instance_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  disconnect_timeout_in_seconds: resolvableValue(z.number().optional()),
  display_name: resolvableValue(z.string().optional()),
  domain_join_info: resolvableValue(
    z.object({
      directory_name: z.string().optional(),
      organizational_unit_distinguished_name: z.string().optional(),
    }).optional(),
  ),
  enable_default_internet_access: resolvableValue(z.boolean().optional()),
  fleet_type: resolvableValue(z.string().optional()),
  iam_role_arn: resolvableValue(z.string().optional()),
  idle_disconnect_timeout_in_seconds: resolvableValue(z.number().optional()),
  image_arn: resolvableValue(z.string().optional()),
  image_name: resolvableValue(z.string().optional()),
  max_sessions_per_instance: resolvableValue(z.number().optional()),
  max_user_duration_in_seconds: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  stream_view: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  vpc_config: resolvableValue(
    z.object({
      security_group_ids: z.string().array().optional(),
      subnet_ids: z.string().array().optional(),
    }).optional(),
  ),
})

export const AwsAppstreamFleetOutputSchema = z.object({
  arn: z.string().optional(),
  compute_capacity: z.object({
    available: z.number().optional(),
    desired_instances: z.number().optional(),
    desired_sessions: z.number().optional(),
    in_use: z.number().optional(),
    running: z.number().optional(),
  }).optional(),
  created_time: z.string().optional(),
  id: z.string().optional(),
  state: z.string().optional(),
})

export type AwsAppstreamFleetInputProps =
  & z.input<typeof AwsAppstreamFleetInputSchema>
  & NodeProps

export type AwsAppstreamFleetOutputProps =
  & z.output<typeof AwsAppstreamFleetOutputSchema>
  & z.output<typeof AwsAppstreamFleetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appstream_fleet

export function AwsAppstreamFleet(props: Partial<AwsAppstreamFleetInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appstream_fleet'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppstreamFleetInputSchema}
      _outputSchema={AwsAppstreamFleetOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppstreamFleet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppstreamFleetOutputProps>(
    AwsAppstreamFleet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppstreamFleets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppstreamFleetOutputProps>(
    AwsAppstreamFleet,
    idFilter,
    baseNode,
    optional,
  )
