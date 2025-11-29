import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudformation_stack_instances

export const InputSchema = z.object({
  stack_set_name: resolvableValue(z.string()),
  accounts: resolvableValue(z.string().array().optional()),
  call_as: resolvableValue(z.string().optional()),
  deployment_targets: resolvableValue(
    z.object({
      account_filter_type: z.string().optional(),
      accounts: z.string().array().optional(),
      accounts_url: z.string().optional(),
      organizational_unit_ids: z.string().array().optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  operation_preferences: resolvableValue(
    z.object({
      concurrency_mode: z.string().optional(),
      failure_tolerance_count: z.number().optional(),
      failure_tolerance_percentage: z.number().optional(),
      max_concurrent_count: z.number().optional(),
      max_concurrent_percentage: z.number().optional(),
      region_concurrency_type: z.string().optional(),
      region_order: z.string().array().optional(),
    }).optional(),
  ),
  parameter_overrides: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  regions: resolvableValue(z.string().array().optional()),
  retain_stacks: resolvableValue(z.boolean().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  stack_instance_summaries: z.object({
    account_id: z.string(),
    detailed_status: z.string(),
    drift_status: z.string(),
    organizational_unit_id: z.string(),
    region: z.string(),
    stack_id: z.string(),
    stack_set_id: z.string(),
    status: z.string(),
    status_reason: z.string(),
  }).array().optional(),
  stack_set_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudformationStackInstances(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudformation_stack_instances'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudformationStackInstancess = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudformationStackInstances, node, id)
