import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudwatchLogGroup } from './AwsCloudwatchLogGroup.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudwatch_log_group

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.number().optional(),
  kms_key_id: z.string().optional(),
  log_group_class: z.string().optional(),
  retention_in_days: z.number().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCloudwatchLogGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCloudwatchLogGroup
      _type='aws_cloudwatch_log_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudwatchLogGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsCloudwatchLogGroup, node, id)

export const useDataAwsCloudwatchLogGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsCloudwatchLogGroup, node, id)
