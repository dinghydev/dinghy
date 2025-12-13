import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCurReportDefinition } from './AwsCurReportDefinition.tsx'

export const InputSchema = z.object({
  report_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  additional_artifacts: z.set(z.string()).optional(),
  additional_schema_elements: z.set(z.string()).optional(),
  compression: z.string().optional(),
  format: z.string().optional(),
  refresh_closed_reports: z.boolean().optional(),
  report_versioning: z.string().optional(),
  s3_bucket: z.string().optional(),
  s3_prefix: z.string().optional(),
  s3_region: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  time_unit: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cur_report_definition

export function DataAwsCurReportDefinition(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCurReportDefinition
      _type='aws_cur_report_definition'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCurReportDefinition = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(DataAwsCurReportDefinition, idFilter, baseNode)

export const useDataAwsCurReportDefinitions = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(DataAwsCurReportDefinition, idFilter, baseNode)
