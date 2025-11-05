import z from 'zod'
import {
  type NodeProps,
  ResolvableStringSchema,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'

export const UserDataTextInputSchema = z.object({
  content: ResolvableStringSchema.optional(),
  children: ResolvableStringSchema.optional(),
})

export const UserDataTextOutputSchema = z.object({
  content: ResolvableStringSchema.optional(),
})

export type UserDataTextInputProps =
  & z.input<typeof UserDataTextInputSchema>
  & NodeProps

export type UserDataTextOutputProps =
  & z.output<typeof UserDataTextOutputSchema>
  & UserDataTextInputProps

export function UserDataText({ children, ...props }: UserDataTextInputProps) {
  return (
    <Shape
      {...{ content: children, ...props }}
    />
  )
}
export const useUserDataText = (node?: any, id?: string) =>
  useTypedNode<UserDataTextOutputProps>(UserDataText, node, id)

export const useUserDataTexts = (node?: any) =>
  useTypedNodes<UserDataTextOutputProps>(UserDataText, node)
