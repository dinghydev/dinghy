import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/signer_signing_profile

export const InputSchema = z.object({
  platform_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  signature_validity_period: resolvableValue(
    z.object({
      type: z.string(),
      value: z.number(),
    }).optional(),
  ),
  signing_material: resolvableValue(
    z.object({
      certificate_arn: z.string(),
    }).optional(),
  ),
  signing_parameters: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  name: z.string().optional(),
  platform_display_name: z.string().optional(),
  revocation_record: z.object({
    revocation_effective_from: z.string(),
    revoked_at: z.string(),
    revoked_by: z.string(),
  }).array().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
  version_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSignerSigningProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_signer_signing_profile'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSignerSigningProfile = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSignerSigningProfile, node, id)

export const useAwsSignerSigningProfiles = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSignerSigningProfile, node, id)
