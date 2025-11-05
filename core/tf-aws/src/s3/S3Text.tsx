import z from 'zod'
import {
  type NodeProps,
  ResolvableStringSchema,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'

export const S3TextInputSchema = z.object({
  content: ResolvableStringSchema.optional(),
  children: ResolvableStringSchema.optional(),
})

export const S3TextOutputSchema = z.object({
  content: ResolvableStringSchema.optional(),
})

export type S3TextInputProps =
  & z.input<typeof S3TextInputSchema>
  & NodeProps

export type S3TextOutputProps =
  & z.output<typeof S3TextOutputSchema>
  & S3TextInputProps

export function S3Text({ children, ...props }: S3TextInputProps) {
  return (
    <Shape
      {...{ content: children, ...props }}
    />
  )
}
export const useS3Text = (node?: any, id?: string) =>
  useTypedNode<S3TextOutputProps>(S3Text, node, id)

export const useS3Texts = (node?: any) =>
  useTypedNodes<S3TextOutputProps>(S3Text, node)
