import { useTypedNode, useTypedNodes } from '../contexts/useTypedNode.tsx'
import { type IacNodeProps, ResolvableStringSchema } from '../types.ts'
import { Shape } from './Shape.tsx'
import z from 'zod'

export const TextInputSchema = z.object({
  content: ResolvableStringSchema.optional(),
  children: ResolvableStringSchema.optional(),
})

export const TextOutputSchema = z.object({
  content: ResolvableStringSchema.optional(),
})

export type TextInputProps =
  & z.input<typeof TextInputSchema>
  & IacNodeProps

export type TextOutputProps =
  & z.output<typeof TextOutputSchema>
  & TextInputProps

export function Text({ children, ...props }: TextInputProps) {
  return (
    <Shape
      {...{ content: children, ...props }}
    />
  )
}
export const useText = (node?: any, id?: string) =>
  useTypedNode<TextOutputProps>(Text, node, id)

export const useTexts = (node?: any) =>
  useTypedNodes<TextOutputProps>(Text, node)
