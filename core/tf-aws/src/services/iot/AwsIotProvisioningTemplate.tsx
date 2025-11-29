import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iot_provisioning_template

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  provisioning_role_arn: resolvableValue(z.string()),
  template_body: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  pre_provisioning_hook: resolvableValue(
    z.object({
      payload_version: z.string().optional(),
      target_arn: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  default_version_id: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIotProvisioningTemplate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_provisioning_template'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIotProvisioningTemplate = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIotProvisioningTemplate, node, id)

export const useAwsIotProvisioningTemplates = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIotProvisioningTemplate, node, id)
