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

export const AwsSagemakerWorkteamInputSchema = TfMetaSchema.extend({
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
})

export const AwsSagemakerWorkteamOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  subdomain: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSagemakerWorkteamInputProps =
  & z.input<typeof AwsSagemakerWorkteamInputSchema>
  & NodeProps

export type AwsSagemakerWorkteamOutputProps =
  & z.output<typeof AwsSagemakerWorkteamOutputSchema>
  & z.output<typeof AwsSagemakerWorkteamInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_workteam

export function AwsSagemakerWorkteam(
  props: Partial<AwsSagemakerWorkteamInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_workteam'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerWorkteamInputSchema}
      _outputSchema={AwsSagemakerWorkteamOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerWorkteam = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerWorkteamOutputProps>(
    AwsSagemakerWorkteam,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerWorkteams = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerWorkteamOutputProps>(
    AwsSagemakerWorkteam,
    idFilter,
    baseNode,
    optional,
  )
