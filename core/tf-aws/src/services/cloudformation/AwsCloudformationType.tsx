import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudformation_type

export const InputSchema = z.object({
  schema_handler_package: resolvableValue(z.string()),
  type_name: resolvableValue(z.string()),
  execution_role_arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  logging_config: resolvableValue(
    z.object({
      log_group_name: z.string(),
      log_role_arn: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  default_version_id: z.string().optional(),
  deprecated_status: z.string().optional(),
  description: z.string().optional(),
  documentation_url: z.string().optional(),
  is_default_version: z.boolean().optional(),
  provisioning_type: z.string().optional(),
  schema: z.string().optional(),
  source_url: z.string().optional(),
  type_arn: z.string().optional(),
  version_id: z.string().optional(),
  visibility: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudformationType(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudformation_type'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudformationType = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudformationType, node, id)

export const useAwsCloudformationTypes = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudformationType, node, id)
