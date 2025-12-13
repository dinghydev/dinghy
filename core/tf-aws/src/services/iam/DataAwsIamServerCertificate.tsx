import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamServerCertificate } from './AwsIamServerCertificate.tsx'

export const InputSchema = z.object({
  latest: resolvableValue(z.boolean().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  path_prefix: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  certificate_body: z.string().optional(),
  certificate_chain: z.string().optional(),
  expiration_date: z.string().optional(),
  id: z.string().optional(),
  path: z.string().optional(),
  upload_date: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/iam_server_certificate

export function DataAwsIamServerCertificate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsIamServerCertificate
      _type='aws_iam_server_certificate'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamServerCertificate = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(DataAwsIamServerCertificate, idFilter, baseNode)

export const useDataAwsIamServerCertificates = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(DataAwsIamServerCertificate, idFilter, baseNode)
