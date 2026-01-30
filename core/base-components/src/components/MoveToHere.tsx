import { type NodeProps, Shape } from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  includes: z.union([z.string(), z.string().array(), z.function()]),
  excludes: z.union([z.string(), z.string().array(), z.function()]).optional(),
  elementOverride: z.any().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export function MoveToHere(
  props: InputProps,
) {
  return (
    <Shape
      _inputSchema={InputSchema}
      {...props}
    />
  )
}
