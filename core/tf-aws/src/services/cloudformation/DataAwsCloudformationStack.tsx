import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudformationStack } from './AwsCloudformationStack.tsx'

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  capabilities: z.set(z.string()).optional(),
  description: z.string().optional(),
  disable_rollback: z.boolean().optional(),
  iam_role_arn: z.string().optional(),
  notification_arns: z.set(z.string()).optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudformation_stack

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

export const useDataAwsCloudformationStack = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsCloudformationStack,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudformationStacks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsCloudformationStack,
    idFilter,
    baseNode,
    optional,
  )
