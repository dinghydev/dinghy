import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/directory_service_conditional_forwarder

export const InputSchema = z.object({
  directory_id: resolvableValue(z.string()),
  dns_ips: resolvableValue(z.string().array()),
  remote_domain_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDirectoryServiceConditionalForwarder(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_directory_service_conditional_forwarder'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDirectoryServiceConditionalForwarder = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsDirectoryServiceConditionalForwarder, node, id)

export const useAwsDirectoryServiceConditionalForwarders = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsDirectoryServiceConditionalForwarder, node, id)
