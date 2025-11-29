import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudwatchEventConnection } from './AwsCloudwatchEventConnection.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudwatch_event_connection

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  authorization_type: z.string().optional(),
  kms_key_identifier: z.string().optional(),
  secret_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCloudwatchEventConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCloudwatchEventConnection
      _type='aws_cloudwatch_event_connection'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudwatchEventConnection = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsCloudwatchEventConnection, node, id)

export const useDataAwsCloudwatchEventConnections = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsCloudwatchEventConnection, node, id)
