import {
  type IacNodeProps,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import z from 'zod'
import { useTypedNode } from '@reactiac/base-components'
import { AwsS3Object } from './AwsS3Object.tsx'
import { Buffer } from 'node:buffer'
import { useS3Texts } from './S3Text.tsx'

export const S3TextFileInputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  filePath: ResolvableStringSchema.optional(),
  content: ResolvableStringSchema.optional(),
  content_base64: ResolvableStringSchema.optional(),
  content_type: ResolvableStringSchema.optional(),
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

const CONTENT_TYPE_MAP = {
  'html': 'text/html',
  'js': 'text/javascript',
  'css': 'text/css',
  'txt': 'text/plain',
  'json': 'application/json',
  'xml': 'application/xml',
  'yaml': 'text/yaml',
  'yml': 'text/yaml',
}

export function S3TextFile(props: S3TextFileInputProps) {
  const content = (node: any) => {
    if (props.content) {
      return props.content
    }
    if (props.content_base64) {
      return Buffer.from(props.content_base64, 'base64').toString('utf-8')
    }

    const { s3Texts } = useS3Texts(node)
    return s3Texts.map((c: any) => {
      const text = c.content
      return text instanceof Function ? text() : text
    }).map((t: string) => t.trim()).join('\n')
  }
  const fileExtension = (props.filePath as string).split('.').pop()

  const content_type = props.content_type ||
    CONTENT_TYPE_MAP[fileExtension as keyof typeof CONTENT_TYPE_MAP] ||
    'text/plain'
  return (
    <AwsS3Object
      {...{ ...props, content, __key: props.filePath, content_type }}
    />
  )
}
export const useS3TextFile = (node?: any, id?: string) =>
  useTypedNode<S3TextFileOutputProps>(S3TextFile, node, id)
