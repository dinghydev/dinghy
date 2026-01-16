import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSignerSigningJob } from './AwsSignerSigningJob.tsx'

export const InputSchema = TfMetaSchema.extend({
  job_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  completed_at: z.string().optional(),
  created_at: z.string().optional(),
  job_invoker: z.string().optional(),
  job_owner: z.string().optional(),
  platform_display_name: z.string().optional(),
  platform_id: z.string().optional(),
  profile_name: z.string().optional(),
  profile_version: z.string().optional(),
  requested_by: z.string().optional(),
  revocation_record: z.object({
    reason: z.string(),
    revoked_at: z.string(),
    revoked_by: z.string(),
  }).array().optional(),
  signature_expires_at: z.string().optional(),
  signed_object: z.object({
    s3: z.object({
      bucket: z.string(),
      key: z.string(),
    }).array(),
  }).array().optional(),
  source: z.object({
    s3: z.object({
      bucket: z.string(),
      key: z.string(),
      version: z.string(),
    }).array(),
  }).array().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/signer_signing_job

export function DataAwsSignerSigningJob(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSignerSigningJob
      _type='aws_signer_signing_job'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSignerSigningJob = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsSignerSigningJob,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSignerSigningJobs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsSignerSigningJob,
    idFilter,
    baseNode,
    optional,
  )
