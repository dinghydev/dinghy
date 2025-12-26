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
  stack_set_name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  call_as: resolvableValue(z.string().optional()),
  deployment_targets: resolvableValue(
    z.object({
      account_filter_type: z.string().optional(),
      accounts: z.string().array().optional(),
      accounts_url: z.string().optional(),
      organizational_unit_ids: z.string().array().optional(),
    }).optional(),
  ),
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
  retain_stack: resolvableValue(z.boolean().optional()),
  stack_set_instance_region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  organizational_unit_id: z.string().optional(),
  stack_id: z.string().optional(),
  stack_instance_summaries: z.object({
    account_id: z.string(),
    organizational_unit_id: z.string(),
    stack_id: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudformation_stack_set_instance

export function AwsCloudformationStackSetInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudformation_stack_set_instance'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudformationStackSetInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCloudformationStackSetInstance,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudformationStackSetInstances = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudformationStackSetInstance,
    idFilter,
    baseNode,
    optional,
  )
