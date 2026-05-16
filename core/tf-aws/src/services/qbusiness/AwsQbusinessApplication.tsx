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

export const AwsQbusinessApplicationInputSchema = TfMetaSchema.extend({
  display_name: resolvableValue(z.string()),
  iam_service_role_arn: resolvableValue(z.string()),
  identity_center_instance_arn: resolvableValue(z.string()),
  attachments_configuration: resolvableValue(
    z.object({
      attachments_control_mode: z.string(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  encryption_configuration: resolvableValue(
    z.object({
      kms_key_id: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsQbusinessApplicationOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  identity_center_application_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsQbusinessApplicationInputProps =
  & z.input<typeof AwsQbusinessApplicationInputSchema>
  & NodeProps

export type AwsQbusinessApplicationOutputProps =
  & z.output<typeof AwsQbusinessApplicationOutputSchema>
  & z.output<typeof AwsQbusinessApplicationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/qbusiness_application

export function AwsQbusinessApplication(
  props: Partial<AwsQbusinessApplicationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_qbusiness_application'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQbusinessApplicationInputSchema}
      _outputSchema={AwsQbusinessApplicationOutputSchema}
      {...props}
    />
  )
}

export const useAwsQbusinessApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQbusinessApplicationOutputProps>(
    AwsQbusinessApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQbusinessApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQbusinessApplicationOutputProps>(
    AwsQbusinessApplication,
    idFilter,
    baseNode,
    optional,
  )
