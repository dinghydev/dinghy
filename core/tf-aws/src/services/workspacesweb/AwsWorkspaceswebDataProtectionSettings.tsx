import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  display_name: resolvableValue(z.string()),
  additional_encryption_context: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  customer_managed_key: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  inline_redaction_configuration: resolvableValue(
    z.object({
      global_confidence_level: z.number().optional(),
      global_enforced_urls: z.string().array().optional(),
      global_exempt_urls: z.string().array().optional(),
      inline_redaction_pattern: z.object({
        built_in_pattern_id: z.string().optional(),
        confidence_level: z.number().optional(),
        enforced_urls: z.string().array().optional(),
        exempt_urls: z.string().array().optional(),
        custom_pattern: z.object({
          keyword_regex: z.string().optional(),
          pattern_description: z.string().optional(),
          pattern_name: z.string(),
          pattern_regex: z.string(),
        }).array().optional(),
        redaction_place_holder: z.object({
          redaction_place_holder_text: z.string().optional(),
          redaction_place_holder_type: z.string(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  associated_portal_arns: z.string().array().optional(),
  data_protection_settings_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/workspacesweb_data_protection_settings

export function AwsWorkspaceswebDataProtectionSettings(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_data_protection_settings'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebDataProtectionSettingss = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsWorkspaceswebDataProtectionSettings,
    idFilter,
    baseNode,
  )
