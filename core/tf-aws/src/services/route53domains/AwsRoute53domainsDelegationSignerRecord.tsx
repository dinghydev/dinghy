import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route53domains_delegation_signer_record

export const InputSchema = z.object({
  domain_name: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  signing_attributes: resolvableValue(
    z.object({
      algorithm: z.number(),
      flags: z.number(),
      public_key: z.string(),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  dnssec_key_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRoute53domainsDelegationSignerRecord(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53domains_delegation_signer_record'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53domainsDelegationSignerRecord = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsRoute53domainsDelegationSignerRecord, node, id)

export const useAwsRoute53domainsDelegationSignerRecords = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsRoute53domainsDelegationSignerRecord, node, id)
