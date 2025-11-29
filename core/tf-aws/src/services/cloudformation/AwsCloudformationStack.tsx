import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudformation_stack

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  capabilities: resolvableValue(z.string().array().optional()),
  disable_rollback: resolvableValue(z.boolean().optional()),
  iam_role_arn: resolvableValue(z.string().optional()),
  notification_arns: resolvableValue(z.string().array().optional()),
  on_failure: resolvableValue(z.string().optional()),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  policy_body: resolvableValue(z.string().optional()),
  policy_url: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  template_body: resolvableValue(z.string().optional()),
  template_url: resolvableValue(z.string().optional()),
  timeout_in_minutes: resolvableValue(z.number().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  outputs: z.record(z.string(), z.string()).optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudformationStack(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudformation_stack'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudformationStack = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudformationStack, node, id)

export const useAwsCloudformationStacks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudformationStack, node, id)
