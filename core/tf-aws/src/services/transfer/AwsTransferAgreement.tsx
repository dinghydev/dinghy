import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/transfer_agreement

export const InputSchema = z.object({
  access_role: resolvableValue(z.string()),
  agreement_id: resolvableValue(z.string()),
  base_directory: resolvableValue(z.string()),
  local_profile_id: resolvableValue(z.string()),
  partner_profile_id: resolvableValue(z.string()),
  server_id: resolvableValue(z.string()),
  status: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsTransferAgreement(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_agreement'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferAgreement = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsTransferAgreement, node, id)

export const useAwsTransferAgreements = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsTransferAgreement, node, id)
