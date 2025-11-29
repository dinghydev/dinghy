import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAuditmanagerControl } from './AwsAuditmanagerControl.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/auditmanager_control

export const InputSchema = z.object({
  action_plan_instructions: resolvableValue(z.string()),
  action_plan_title: resolvableValue(z.string()),
  arn: resolvableValue(z.string()),
  control_mapping_sources: resolvableValue(
    z.object({
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
    }).array(),
  ),
  description: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  tags: resolvableValue(z.record(z.string(), z.string())),
  testing_information: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsAuditmanagerControl(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsAuditmanagerControl
      _type='aws_auditmanager_control'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAuditmanagerControl = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsAuditmanagerControl, node, id)

export const useDataAwsAuditmanagerControls = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsAuditmanagerControl, node, id)
