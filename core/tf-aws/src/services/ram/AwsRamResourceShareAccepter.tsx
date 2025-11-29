import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ram_resource_share_accepter

export const InputSchema = z.object({
  share_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  invitation_arn: z.string().optional(),
  receiver_account_id: z.string().optional(),
  resources: z.string().array().optional(),
  sender_account_id: z.string().optional(),
  share_id: z.string().optional(),
  share_name: z.string().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRamResourceShareAccepter(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ram_resource_share_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRamResourceShareAccepter = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRamResourceShareAccepter, node, id)

export const useAwsRamResourceShareAccepters = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRamResourceShareAccepter, node, id)
