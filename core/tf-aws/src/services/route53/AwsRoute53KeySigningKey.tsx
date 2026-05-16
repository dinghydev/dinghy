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

export const AwsRoute53KeySigningKeyInputSchema = TfMetaSchema.extend({
  hosted_zone_id: resolvableValue(z.string()),
  key_management_service_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  status: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRoute53KeySigningKeyOutputSchema = z.object({
  digest_algorithm_mnemonic: z.string().optional(),
  digest_algorithm_type: z.number().optional(),
  digest_value: z.string().optional(),
  dnskey_record: z.string().optional(),
  ds_record: z.string().optional(),
  flag: z.number().optional(),
  id: z.string().optional(),
  key_tag: z.number().optional(),
  public_key: z.string().optional(),
  signing_algorithm_mnemonic: z.string().optional(),
  signing_algorithm_type: z.number().optional(),
})

export type AwsRoute53KeySigningKeyInputProps =
  & z.input<typeof AwsRoute53KeySigningKeyInputSchema>
  & NodeProps

export type AwsRoute53KeySigningKeyOutputProps =
  & z.output<typeof AwsRoute53KeySigningKeyOutputSchema>
  & z.output<typeof AwsRoute53KeySigningKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_key_signing_key

export function AwsRoute53KeySigningKey(
  props: Partial<AwsRoute53KeySigningKeyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_key_signing_key'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53KeySigningKeyInputSchema}
      _outputSchema={AwsRoute53KeySigningKeyOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53KeySigningKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53KeySigningKeyOutputProps>(
    AwsRoute53KeySigningKey,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53KeySigningKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53KeySigningKeyOutputProps>(
    AwsRoute53KeySigningKey,
    idFilter,
    baseNode,
    optional,
  )
