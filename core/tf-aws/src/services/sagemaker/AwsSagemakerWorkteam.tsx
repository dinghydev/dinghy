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
  description: resolvableValue(z.string()),
  member_definition: resolvableValue(
    z.object({
      cognito_member_definition: z.object({
        client_id: z.string(),
        user_group: z.string(),
        user_pool: z.string(),
      }).optional(),
      oidc_member_definition: z.object({
        groups: z.string().array(),
      }).optional(),
    }).array(),
  ),
  workteam_name: resolvableValue(z.string()),
  notification_configuration: resolvableValue(
    z.object({
      notification_topic_arn: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  worker_access_configuration: resolvableValue(
    z.object({
      s3_presign: z.object({
        iam_policy_constraints: z.object({
          source_ip: z.string().optional(),
          vpc_source_ip: z.string().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  workforce_name: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  subdomain: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_workteam

export function AwsSagemakerWorkteam(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_workteam'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerWorkteam = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsSagemakerWorkteam, idFilter, baseNode, optional)

export const useAwsSagemakerWorkteams = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsSagemakerWorkteam, idFilter, baseNode, optional)
