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

export const AwsCloudformationStackSetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  administration_role_arn: resolvableValue(z.string().optional()),
  auto_deployment: resolvableValue(
    z.object({
      depends_on_stack_sets: z.string().array().optional(),
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
})

export const AwsCloudformationStackSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  stack_set_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCloudformationStackSetInputProps =
  & z.input<typeof AwsCloudformationStackSetInputSchema>
  & NodeProps

export type AwsCloudformationStackSetOutputProps =
  & z.output<typeof AwsCloudformationStackSetOutputSchema>
  & z.output<typeof AwsCloudformationStackSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudformation_stack_set

export function AwsCloudformationStackSet(
  props: Partial<AwsCloudformationStackSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudformation_stack_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudformationStackSetInputSchema}
      _outputSchema={AwsCloudformationStackSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudformationStackSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudformationStackSetOutputProps>(
    AwsCloudformationStackSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudformationStackSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudformationStackSetOutputProps>(
    AwsCloudformationStackSet,
    idFilter,
    baseNode,
    optional,
  )
