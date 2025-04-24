import {
  type IacNodeProps,
  ResolvableStringSchema,
  Shape,
  useTexts,
} from '@reactiac/base-components'

import z from 'zod'
import { useTypedNode } from '@reactiac/base-components'
import { Buffer } from 'node:buffer'

export const UserDataInputSchema = z.object({
  content: ResolvableStringSchema.optional(),
  content_base64: ResolvableStringSchema.optional(),
})

export const UserDataOutputSchema = z.object({
  content: ResolvableStringSchema.optional(),
})

export type UserDataInputProps =
  & z.input<typeof UserDataInputSchema>
  & IacNodeProps

export type UserDataOutputProps =
  & z.output<typeof UserDataOutputSchema>
  & UserDataInputProps

export function UserData(props: UserDataInputProps) {
  const content = (node: any) => {
    if (props.content) {
      return props.content
    }
    if (props.content_base64) {
      return Buffer.from(props.content_base64, 'base64').toString('utf-8')
    }

    const { texts } = useTexts(node)
    return texts.map((c: any) => {
      return c.content
    }).join('\n')
  }
  return (
    <Shape
      {...{ ...props, content }}
    />
  )
}
export const useUserData = (node?: any, id?: string) =>
  useTypedNode<UserDataOutputProps>(UserData, node, id)
