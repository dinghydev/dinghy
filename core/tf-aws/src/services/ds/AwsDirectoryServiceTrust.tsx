import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/directory_service_trust

export const InputSchema = z.object({
  directory_id: resolvableValue(z.string()),
  remote_domain_name: resolvableValue(z.string()),
  trust_direction: resolvableValue(z.string()),
  trust_password: resolvableValue(z.string()),
  conditional_forwarder_ip_addrs: resolvableValue(
    z.string().array().optional(),
  ),
  delete_associated_conditional_forwarder: resolvableValue(
    z.boolean().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  selective_auth: resolvableValue(z.string().optional()),
  trust_type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  created_date_time: z.string().optional(),
  id: z.string().optional(),
  last_updated_date_time: z.string().optional(),
  state_last_updated_date_time: z.string().optional(),
  trust_state: z.string().optional(),
  trust_state_reason: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDirectoryServiceTrust(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_directory_service_trust'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDirectoryServiceTrust = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDirectoryServiceTrust, node, id)

export const useAwsDirectoryServiceTrusts = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDirectoryServiceTrust, node, id)
