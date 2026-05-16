import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSignerSigningProfile } from './AwsSignerSigningProfile.tsx'

export const DataAwsSignerSigningProfileInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSignerSigningProfileOutputSchema = z.object({
  arn: z.string().optional(),
  platform_display_name: z.string().optional(),
  platform_id: z.string().optional(),
  revocation_record: z.object({
    revocation_effective_from: z.string(),
    revoked_at: z.string(),
    revoked_by: z.string(),
  }).array().optional(),
  signature_validity_period: z.object({
    type: z.string(),
    value: z.number(),
  }).array().optional(),
  signing_material: z.object({
    certificate_arn: z.string(),
  }).array().optional(),
  signing_parameters: z.record(z.string(), z.string()).optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
  version_arn: z.string().optional(),
})

export type DataAwsSignerSigningProfileInputProps =
  & z.input<typeof DataAwsSignerSigningProfileInputSchema>
  & NodeProps

export type DataAwsSignerSigningProfileOutputProps =
  & z.output<typeof DataAwsSignerSigningProfileOutputSchema>
  & z.output<typeof DataAwsSignerSigningProfileInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/signer_signing_profile

export function DataAwsSignerSigningProfile(
  props: Partial<DataAwsSignerSigningProfileInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSignerSigningProfile
      _type='aws_signer_signing_profile'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSignerSigningProfileInputSchema}
      _outputSchema={DataAwsSignerSigningProfileOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSignerSigningProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSignerSigningProfileOutputProps>(
    DataAwsSignerSigningProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSignerSigningProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSignerSigningProfileOutputProps>(
    DataAwsSignerSigningProfile,
    idFilter,
    baseNode,
    optional,
  )
