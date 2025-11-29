import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCodebuildFleet } from './AwsCodebuildFleet.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/codebuild_fleet

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  base_capacity: z.number().optional(),
  compute_configuration: z.object({
    disk: z.number(),
    instance_type: z.string(),
    machine_type: z.string(),
    memory: z.number(),
    vcpu: z.number(),
  }).array().optional(),
  compute_type: z.string().optional(),
  created: z.string().optional(),
  environment_type: z.string().optional(),
  fleet_service_role: z.string().optional(),
  id: z.string().optional(),
  image_id: z.string().optional(),
  last_modified: z.string().optional(),
  overflow_behavior: z.string().optional(),
  scaling_configuration: z.object({
    desired_capacity: z.number(),
    max_capacity: z.number(),
    scaling_type: z.string(),
    target_tracking_scaling_configs: z.object({
      metric_type: z.string(),
      target_value: z.number(),
    }).array(),
  }).array().optional(),
  status: z.object({
    context: z.string(),
    message: z.string(),
    status_code: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  vpc_config: z.object({
    security_group_ids: z.string().array(),
    subnets: z.string().array(),
    vpc_id: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCodebuildFleet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCodebuildFleet
      _type='aws_codebuild_fleet'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCodebuildFleet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsCodebuildFleet, node, id)

export const useDataAwsCodebuildFleets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsCodebuildFleet, node, id)
