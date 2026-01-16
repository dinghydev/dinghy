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

export const InputSchema = TfMetaSchema.extend({
  base_capacity: resolvableValue(z.number()),
  compute_type: resolvableValue(z.string()),
  environment_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  compute_configuration: resolvableValue(
    z.object({
      disk: z.number().optional(),
      instance_type: z.string().optional(),
      machine_type: z.string().optional(),
      memory: z.number().optional(),
      vcpu: z.number().optional(),
    }).optional(),
  ),
  fleet_service_role: resolvableValue(z.string().optional()),
  image_id: resolvableValue(z.string().optional()),
  overflow_behavior: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  scaling_configuration: resolvableValue(
    z.object({
      desired_capacity: z.number().optional(),
      max_capacity: z.number().optional(),
      scaling_type: z.string().optional(),
      target_tracking_scaling_configs: z.object({
        metric_type: z.string().optional(),
        target_value: z.number().optional(),
      }).array().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  vpc_config: resolvableValue(
    z.object({
      security_group_ids: z.string().array(),
      subnets: z.string().array(),
      vpc_id: z.string(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created: z.string().optional(),
  id: z.string().optional(),
  last_modified: z.string().optional(),
  status: z.set(z.object({
    context: z.string(),
    message: z.string(),
    status_code: z.string(),
  })).optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/codebuild_fleet

export function AwsCodebuildFleet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codebuild_fleet'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCodebuildFleet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsCodebuildFleet, idFilter, baseNode, optional)

export const useAwsCodebuildFleets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsCodebuildFleet, idFilter, baseNode, optional)
