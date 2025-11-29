import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_workteam

export const InputSchema = z.object({
  description: resolvableValue(z.string()),
  workteam_name: resolvableValue(z.string()),
  member_definition: resolvableValue(z.object({
    cognito_member_definition: z.object({
      client_id: z.string(),
      user_group: z.string(),
      user_pool: z.string(),
    }).optional(),
    oidc_member_definition: z.object({
      groups: z.string().array(),
    }).optional(),
  })),
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
})

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

export function AwsSagemakerWorkteam(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsSagemakerWorkteam = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSagemakerWorkteam, node, id)

export const useAwsSagemakerWorkteams = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSagemakerWorkteam, node, id)
