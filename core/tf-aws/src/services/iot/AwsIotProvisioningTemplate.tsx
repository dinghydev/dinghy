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

export const AwsIotProvisioningTemplateInputSchema = TfMetaSchema.extend({
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

export const AwsIotProvisioningTemplateOutputSchema = z.object({
  arn: z.string().optional(),
  default_version_id: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsIotProvisioningTemplateInputProps =
  & z.input<typeof AwsIotProvisioningTemplateInputSchema>
  & NodeProps

export type AwsIotProvisioningTemplateOutputProps =
  & z.output<typeof AwsIotProvisioningTemplateOutputSchema>
  & z.output<typeof AwsIotProvisioningTemplateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_provisioning_template

export function AwsIotProvisioningTemplate(
  props: Partial<AwsIotProvisioningTemplateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_provisioning_template'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotProvisioningTemplateInputSchema}
      _outputSchema={AwsIotProvisioningTemplateOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotProvisioningTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIotProvisioningTemplateOutputProps>(
    AwsIotProvisioningTemplate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIotProvisioningTemplates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIotProvisioningTemplateOutputProps>(
    AwsIotProvisioningTemplate,
    idFilter,
    baseNode,
    optional,
  )
