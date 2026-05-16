import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAuditmanagerControl } from './AwsAuditmanagerControl.tsx'

export const DataAwsAuditmanagerControlInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsAuditmanagerControlOutputSchema = z.object({
  action_plan_instructions: z.string().optional(),
  action_plan_title: z.string().optional(),
  arn: z.string().optional(),
  control_mapping_sources: z.object({
    source_description: z.string(),
    source_frequency: z.string(),
    source_id: z.string(),
    source_keyword: z.object({
      keyword_input_type: z.string(),
      keyword_value: z.string(),
    }).array(),
    source_name: z.string(),
    source_set_up_option: z.string(),
    source_type: z.string(),
    troubleshooting_text: z.string(),
  }).array().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  testing_information: z.string().optional(),
})

export type DataAwsAuditmanagerControlInputProps =
  & z.input<typeof DataAwsAuditmanagerControlInputSchema>
  & NodeProps

export type DataAwsAuditmanagerControlOutputProps =
  & z.output<typeof DataAwsAuditmanagerControlOutputSchema>
  & z.output<typeof DataAwsAuditmanagerControlInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/auditmanager_control

export function DataAwsAuditmanagerControl(
  props: Partial<DataAwsAuditmanagerControlInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAuditmanagerControl
      _type='aws_auditmanager_control'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAuditmanagerControlInputSchema}
      _outputSchema={DataAwsAuditmanagerControlOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAuditmanagerControl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsAuditmanagerControlOutputProps>(
    DataAwsAuditmanagerControl,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAuditmanagerControls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAuditmanagerControlOutputProps>(
    DataAwsAuditmanagerControl,
    idFilter,
    baseNode,
    optional,
  )
