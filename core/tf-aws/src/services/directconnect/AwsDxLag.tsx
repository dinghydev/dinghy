import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dx_lag

export const InputSchema = z.object({
  connections_bandwidth: resolvableValue(z.string()),
  jumbo_frame_capable: resolvableValue(z.boolean()),
  location: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  connection_id: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  provider_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  has_logical_redundancy: z.string().optional(),
  id: z.string().optional(),
  owner_account_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDxLag(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_lag'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDxLag = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDxLag, node, id)

export const useAwsDxLags = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDxLag, node, id)
