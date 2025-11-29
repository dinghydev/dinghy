import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamServerCertificate } from './AwsIamServerCertificate.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/iam_server_certificate

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  certificate_body: resolvableValue(z.string()),
  certificate_chain: resolvableValue(z.string()),
  expiration_date: resolvableValue(z.string()),
  path: resolvableValue(z.string()),
  upload_date: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  latest: resolvableValue(z.boolean().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  path_prefix: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

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

export const useDataAwsIamServerCertificate = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsIamServerCertificate, node, id)

export const useDataAwsIamServerCertificates = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsIamServerCertificate, node, id)
