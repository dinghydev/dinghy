import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dlm_lifecycle_policy

export const InputSchema = z.object({
  description: resolvableValue(z.string()),
  execution_role_arn: resolvableValue(z.string()),
  default_policy: resolvableValue(z.string().optional()),
  policy_details: resolvableValue(z.object({
    copy_tags: z.boolean().optional(),
    create_interval: z.number().optional(),
    extend_deletion: z.boolean().optional(),
    policy_language: z.string().optional(),
    policy_type: z.string().optional(),
    resource_locations: z.string().array().optional(),
    resource_type: z.string().optional(),
    resource_types: z.string().array().optional(),
    retain_interval: z.number().optional(),
    target_tags: z.record(z.string(), z.string()).optional(),
  })),
  region: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDlmLifecyclePolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dlm_lifecycle_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDlmLifecyclePolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDlmLifecyclePolicy, node, id)

export const useAwsDlmLifecyclePolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDlmLifecyclePolicy, node, id)
