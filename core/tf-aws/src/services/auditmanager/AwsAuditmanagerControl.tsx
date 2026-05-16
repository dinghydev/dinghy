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

export const AwsAuditmanagerControlInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  action_plan_instructions: resolvableValue(z.string().optional()),
  action_plan_title: resolvableValue(z.string().optional()),
  control_mapping_sources: resolvableValue(
    z.object({
      source_description: z.string().optional(),
      source_frequency: z.string().optional(),
      source_id: z.string().optional(),
      source_keyword: z.object({
        keyword_input_type: z.string(),
        keyword_value: z.string(),
      }).array().optional(),
      source_name: z.string(),
      source_set_up_option: z.string(),
      source_type: z.string(),
      troubleshooting_text: z.string().optional(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  testing_information: resolvableValue(z.string().optional()),
})

export const AwsAuditmanagerControlOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export const AwsAuditmanagerControlImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsAuditmanagerControlInputProps =
  & z.input<typeof AwsAuditmanagerControlInputSchema>
  & z.input<typeof AwsAuditmanagerControlImportSchema>
  & NodeProps

export type AwsAuditmanagerControlOutputProps =
  & z.output<typeof AwsAuditmanagerControlOutputSchema>
  & z.output<typeof AwsAuditmanagerControlInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/auditmanager_control

export function AwsAuditmanagerControl(
  props: Partial<AwsAuditmanagerControlInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_auditmanager_control'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAuditmanagerControlInputSchema}
      _outputSchema={AwsAuditmanagerControlOutputSchema}
      _importSchema={AwsAuditmanagerControlImportSchema}
      {...props}
    />
  )
}

export const useAwsAuditmanagerControl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAuditmanagerControlOutputProps>(
    AwsAuditmanagerControl,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAuditmanagerControls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAuditmanagerControlOutputProps>(
    AwsAuditmanagerControl,
    idFilter,
    baseNode,
    optional,
  )
