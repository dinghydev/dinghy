import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectQuickConnect } from './AwsConnectQuickConnect.tsx'

export const InputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string().optional()),
  quick_connect_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  quick_connect_config: z.object({
    phone_config: z.object({
      phone_number: z.string(),
    }).array(),
    queue_config: z.object({
      contact_flow_id: z.string(),
      queue_id: z.string(),
    }).array(),
    quick_connect_type: z.string(),
    user_config: z.object({
      contact_flow_id: z.string(),
      user_id: z.string(),
    }).array(),
  }).array().optional(),
  quick_connect_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/connect_quick_connect

export function DataAwsConnectQuickConnect(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsConnectQuickConnect
      _type='aws_connect_quick_connect'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectQuickConnect = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsConnectQuickConnect,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsConnectQuickConnects = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsConnectQuickConnect,
    idFilter,
    baseNode,
    optional,
  )
