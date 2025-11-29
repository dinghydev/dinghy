import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudformationStack } from './AwsCloudformationStack.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudformation_stack

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  capabilities: z.string().array().optional(),
  description: z.string().optional(),
  disable_rollback: z.boolean().optional(),
  iam_role_arn: z.string().optional(),
  notification_arns: z.string().array().optional(),
  outputs: z.record(z.string(), z.string()).optional(),
  parameters: z.record(z.string(), z.string()).optional(),
  tags: z.record(z.string(), z.string()).optional(),
  template_body: z.string().optional(),
  timeout_in_minutes: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCloudformationStack(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCloudformationStack
      _type='aws_cloudformation_stack'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudformationStack = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsCloudformationStack, node, id)

export const useDataAwsCloudformationStacks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsCloudformationStack, node, id)
