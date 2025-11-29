import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/qbusiness_application

export const InputSchema = z.object({
  display_name: resolvableValue(z.string()),
  iam_service_role_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  identity_center_instance_arn: resolvableValue(z.string()),
  attachments_configuration: resolvableValue(
    z.object({
      attachments_control_mode: z.string(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  encryption_configuration: resolvableValue(
    z.object({
      kms_key_id: z.string(),
    }).optional(),
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  identity_center_application_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsQbusinessApplication(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_qbusiness_application'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsQbusinessApplication = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsQbusinessApplication, node, id)

export const useAwsQbusinessApplications = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsQbusinessApplication, node, id)
