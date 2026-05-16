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

export const AwsSnsPlatformApplicationInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  platform: resolvableValue(z.string()),
  platform_credential: resolvableValue(z.string()),
  apple_platform_bundle_id: resolvableValue(z.string().optional()),
  apple_platform_team_id: resolvableValue(z.string().optional()),
  event_delivery_failure_topic_arn: resolvableValue(z.string().optional()),
  event_endpoint_created_topic_arn: resolvableValue(z.string().optional()),
  event_endpoint_deleted_topic_arn: resolvableValue(z.string().optional()),
  event_endpoint_updated_topic_arn: resolvableValue(z.string().optional()),
  failure_feedback_role_arn: resolvableValue(z.string().optional()),
  platform_principal: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  success_feedback_role_arn: resolvableValue(z.string().optional()),
  success_feedback_sample_rate: resolvableValue(z.string().optional()),
})

export const AwsSnsPlatformApplicationOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsSnsPlatformApplicationInputProps =
  & z.input<typeof AwsSnsPlatformApplicationInputSchema>
  & NodeProps

export type AwsSnsPlatformApplicationOutputProps =
  & z.output<typeof AwsSnsPlatformApplicationOutputSchema>
  & z.output<typeof AwsSnsPlatformApplicationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sns_platform_application

export function AwsSnsPlatformApplication(
  props: Partial<AwsSnsPlatformApplicationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sns_platform_application'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSnsPlatformApplicationInputSchema}
      _outputSchema={AwsSnsPlatformApplicationOutputSchema}
      {...props}
    />
  )
}

export const useAwsSnsPlatformApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSnsPlatformApplicationOutputProps>(
    AwsSnsPlatformApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSnsPlatformApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSnsPlatformApplicationOutputProps>(
    AwsSnsPlatformApplication,
    idFilter,
    baseNode,
    optional,
  )
