import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRdsCertificate } from './AwsRdsCertificate.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/rds_certificate

export const InputSchema = z.object({
  default_for_new_launches: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  latest_valid_till: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  certificate_type: z.string().optional(),
  customer_override: z.boolean().optional(),
  customer_override_valid_till: z.string().optional(),
  thumbprint: z.string().optional(),
  valid_from: z.string().optional(),
  valid_till: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsRdsCertificate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsRdsCertificate
      _type='aws_rds_certificate'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRdsCertificate = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsRdsCertificate, node, id)

export const useDataAwsRdsCertificates = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsRdsCertificate, node, id)
