import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sesv2_dedicated_ip_assignment

export const InputSchema = z.object({
  destination_pool_name: resolvableValue(z.string()),
  ip: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSesv2DedicatedIpAssignment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_dedicated_ip_assignment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2DedicatedIpAssignment = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSesv2DedicatedIpAssignment, node, id)

export const useAwsSesv2DedicatedIpAssignments = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSesv2DedicatedIpAssignment, node, id)
