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
  name: resolvableValue(z.string()),
  administration_role_arn: resolvableValue(z.string().optional()),
  auto_deployment: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
      retain_stacks_on_account_removal: z.boolean().optional(),
    }).optional(),
  ),
  call_as: resolvableValue(z.string().optional()),
  capabilities: resolvableValue(z.string().array().optional()),
  description: resolvableValue(z.string().optional()),
  execution_role_name: resolvableValue(z.string().optional()),
  managed_execution: resolvableValue(
    z.object({
      active: z.boolean().optional(),
    }).optional(),
  ),
  operation_preferences: resolvableValue(
    z.object({
      failure_tolerance_count: z.number().optional(),
      failure_tolerance_percentage: z.number().optional(),
      max_concurrent_count: z.number().optional(),
      max_concurrent_percentage: z.number().optional(),
      region_concurrency_type: z.string().optional(),
      region_order: z.string().array().optional(),
    }).optional(),
  ),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  permission_model: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  template_body: resolvableValue(z.string().optional()),
  template_url: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  stack_set_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudformation_stack_set

export function AwsCloudformationStackSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudformation_stack_set'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudformationStackSet = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsCloudformationStackSet, idFilter, baseNode)

export const useAwsCloudformationStackSets = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsCloudformationStackSet, idFilter, baseNode)
