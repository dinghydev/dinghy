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
  email_identity: resolvableValue(z.string()),
  configuration_set_name: resolvableValue(z.string().optional()),
  dkim_signing_attributes: resolvableValue(
    z.object({
      current_signing_key_length: z.string(),
      domain_signing_private_key: z.string().optional(),
      domain_signing_selector: z.string().optional(),
      last_key_generation_timestamp: z.string(),
      next_signing_key_length: z.string().optional(),
      signing_attributes_origin: z.string(),
      status: z.string(),
      tokens: z.string().array(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  dkim_signing_attributes: z.object({
    current_signing_key_length: z.string(),
    domain_signing_private_key: z.string().optional(),
    domain_signing_selector: z.string().optional(),
    last_key_generation_timestamp: z.string(),
    next_signing_key_length: z.string().optional(),
    signing_attributes_origin: z.string(),
    status: z.string(),
    tokens: z.string().array(),
  }).optional().optional(),
  identity_type: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  verification_status: z.string().optional(),
  verified_for_sending_status: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sesv2_email_identity

export function AwsSesv2EmailIdentity(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_email_identity'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2EmailIdentity = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsSesv2EmailIdentity, idFilter, baseNode, optional)

export const useAwsSesv2EmailIdentitys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSesv2EmailIdentity,
    idFilter,
    baseNode,
    optional,
  )
