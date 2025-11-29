import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectInstance } from './AwsConnectInstance.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/connect_instance

export const InputSchema = z.object({
  auto_resolve_best_voices_enabled: resolvableValue(z.boolean()),
  id: resolvableValue(z.string().optional()),
  instance_alias: resolvableValue(z.string().optional()),
  instance_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  contact_flow_logs_enabled: z.boolean().optional(),
  contact_lens_enabled: z.boolean().optional(),
  created_time: z.string().optional(),
  early_media_enabled: z.boolean().optional(),
  identity_management_type: z.string().optional(),
  inbound_calls_enabled: z.boolean().optional(),
  multi_party_conference_enabled: z.boolean().optional(),
  outbound_calls_enabled: z.boolean().optional(),
  service_role: z.string().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsConnectInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsConnectInstance
      _type='aws_connect_instance'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectInstance = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsConnectInstance, node, id)

export const useDataAwsConnectInstances = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsConnectInstance, node, id)
