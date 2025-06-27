import {
  type IacNodeProps,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import z from 'zod'
import { useTypedNode } from '@reactiac/base-components'
import { Buffer } from 'node:buffer'
import { useUserDataTexts } from './UserDataText.tsx'
import { azure } from '../../../standard-components-diagrams/src/index.ts'

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
      return Buffer.from(props.content_base64 as string, 'base64').toString(
        'utf-8',
      )
    }

    const { dataTexts } = useUserDataTexts(node)
    return dataTexts.map((c: any) => {
      const text = c.content
      return text instanceof Function ? text() : text
    }).map((t: string) => t.trim()).join('\n')
  }
  return (
    <azure.CloudServicesConfigurationFile
      {...{ ...props, content }}
    />
  )
}
export const useUserData = (node?: any, id?: string) =>
  useTypedNode<UserDataOutputProps>(UserData, node, id)
