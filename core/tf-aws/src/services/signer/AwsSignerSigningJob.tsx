import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/signer_signing_job

export const InputSchema = z.object({
  profile_name: resolvableValue(z.string()),
  source: resolvableValue(z.object({
    s3: z.object({
      bucket: z.string(),
      key: z.string(),
      version: z.string(),
    }),
  })),
  destination: resolvableValue(z.object({
    s3: z.object({
      bucket: z.string(),
      prefix: z.string().optional(),
    }),
  })),
  id: resolvableValue(z.string().optional()),
  ignore_signing_job_failure: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  completed_at: z.string().optional(),
  created_at: z.string().optional(),
  job_id: z.string().optional(),
  job_invoker: z.string().optional(),
  job_owner: z.string().optional(),
  platform_display_name: z.string().optional(),
  platform_id: z.string().optional(),
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
  status: z.string().optional(),
  status_reason: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSignerSigningJob(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_signer_signing_job'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSignerSigningJob = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSignerSigningJob, node, id)

export const useAwsSignerSigningJobs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSignerSigningJob, node, id)
