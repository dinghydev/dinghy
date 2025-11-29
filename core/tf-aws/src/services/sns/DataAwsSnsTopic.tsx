import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSnsTopic } from './AwsSnsTopic.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/sns_topic

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSnsTopic(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSnsTopic
      _type='aws_sns_topic'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSnsTopic = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsSnsTopic, node, id)

export const useDataAwsSnsTopics = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsSnsTopic, node, id)
