import {
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const BackendInputSchema = z.object({
  alias: resolvableValue(z.string().optional()),
  type: resolvableValue(z.string().default('local')),
})

export type InputProps =
  & z.input<typeof BackendInputSchema>
  & NodeProps

// https://developer.hashicorp.com/terraform/language/backend

export function Backend(props: Partial<InputProps>) {
  return (
    <Shape
      _category='terraform'
      {...props}
    />
  )
}

export const useBackend = (idFilter?: string, baseNode?: any) =>
  useTypedNode<InputProps>(Backend, idFilter, baseNode)

export const useBackends = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<InputProps>(Backend, idFilter, baseNode)
