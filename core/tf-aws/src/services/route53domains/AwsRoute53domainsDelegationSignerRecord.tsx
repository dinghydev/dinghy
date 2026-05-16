import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsRoute53domainsDelegationSignerRecordInputSchema = TfMetaSchema
  .extend({
    domain_name: resolvableValue(z.string()),
    signing_attributes: resolvableValue(
      z.object({
        algorithm: z.number(),
        flags: z.number(),
        public_key: z.string(),
      }).array().optional(),
    ),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsRoute53domainsDelegationSignerRecordOutputSchema = z.object({
  dnssec_key_id: z.string().optional(),
  id: z.string().optional(),
})

export type AwsRoute53domainsDelegationSignerRecordInputProps =
  & z.input<typeof AwsRoute53domainsDelegationSignerRecordInputSchema>
  & NodeProps

export type AwsRoute53domainsDelegationSignerRecordOutputProps =
  & z.output<typeof AwsRoute53domainsDelegationSignerRecordOutputSchema>
  & z.output<typeof AwsRoute53domainsDelegationSignerRecordInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53domains_delegation_signer_record

export function AwsRoute53domainsDelegationSignerRecord(
  props: Partial<AwsRoute53domainsDelegationSignerRecordInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53domains_delegation_signer_record'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53domainsDelegationSignerRecordInputSchema}
      _outputSchema={AwsRoute53domainsDelegationSignerRecordOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53domainsDelegationSignerRecord = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53domainsDelegationSignerRecordOutputProps>(
    AwsRoute53domainsDelegationSignerRecord,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53domainsDelegationSignerRecords = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53domainsDelegationSignerRecordOutputProps>(
    AwsRoute53domainsDelegationSignerRecord,
    idFilter,
    baseNode,
    optional,
  )
