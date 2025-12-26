import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKendraFaq } from './AwsKendraFaq.tsx'

export const InputSchema = z.object({
  faq_id: resolvableValue(z.string()),
  index_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  description: z.string().optional(),
  error_message: z.string().optional(),
  file_format: z.string().optional(),
  id: z.string().optional(),
  language_code: z.string().optional(),
  name: z.string().optional(),
  role_arn: z.string().optional(),
  s3_path: z.object({
    bucket: z.string(),
    key: z.string(),
  }).array().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  updated_at: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/kendra_faq

export function DataAwsKendraFaq(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsKendraFaq
      _type='aws_kendra_faq'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKendraFaq = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsKendraFaq, idFilter, baseNode, optional)

export const useDataAwsKendraFaqs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsKendraFaq, idFilter, baseNode, optional)
