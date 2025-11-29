import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDmsCertificate } from './AwsDmsCertificate.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/dms_certificate

export const InputSchema = z.object({
  certificate_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  certificate_arn: z.string().optional(),
  certificate_creation_date: z.string().optional(),
  certificate_owner: z.string().optional(),
  certificate_pem: z.string().optional(),
  certificate_wallet: z.string().optional(),
  key_length: z.number().optional(),
  signing_algorithm: z.string().optional(),
  valid_from_date: z.string().optional(),
  valid_to_date: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsDmsCertificate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsDmsCertificate
      _type='aws_dms_certificate'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDmsCertificate = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsDmsCertificate, node, id)

export const useDataAwsDmsCertificates = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsDmsCertificate, node, id)
