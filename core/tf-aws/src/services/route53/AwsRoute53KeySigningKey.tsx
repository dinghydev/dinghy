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

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route53_key_signing_key

export function AwsRoute53KeySigningKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_key_signing_key'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53KeySigningKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsRoute53KeySigningKey,
    idFilter,
    baseNode,
    optional,
  )
