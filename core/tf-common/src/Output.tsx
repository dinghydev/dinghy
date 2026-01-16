import {
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  value: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  sensitive: resolvableValue(z.boolean().optional()),
  ephemeral: resolvableValue(z.boolean().optional()),
  precondition: z.object({
    condition: resolvableValue(z.string()),
    error_message: resolvableValue(z.string().optional()),
  }).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

// https://developer.hashicorp.com/terraform/language/block/output

export function Output(props: Partial<InputProps>) {
  return (
    <Shape
      _type='output'
      _category='output'
      _inputSchema={InputSchema}
      {...props}
    />
  )
}

export const useOutput = (idFilter?: string, baseNode?: any) =>
  useTypedNode<InputProps>(Output, idFilter, baseNode)

export const useOutputs = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<InputProps>(Output, idFilter, baseNode)
