import {
  type IacNodeProps,
  ResolvableStringSchema,
  useTexts,
} from '@reactiac/base-components'

import z from 'zod'
import { useTypedNode } from '@reactiac/base-components'
import { AwsS3Object } from './AwsS3Object.tsx'
import { Buffer } from 'node:buffer'

export const S3TextFileInputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  filePath: ResolvableStringSchema.optional(),
  content: ResolvableStringSchema.optional(),
  content_base64: ResolvableStringSchema.optional(),
})

export const S3TextFileOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
})

export type S3TextFileInputProps =
  & z.input<typeof S3TextFileInputSchema>
  & IacNodeProps

export type S3TextFileOutputProps =
  & z.output<typeof S3TextFileOutputSchema>
  & S3TextFileInputProps

export function S3TextFile(props: S3TextFileInputProps) {
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
    <AwsS3Object
      {...{ ...props, content, __key: props.filePath }}
    />
  )
}
export const useS3TextFile = (id?: string) =>
  useTypedNode<S3TextFileOutputProps>(S3TextFile, id)
