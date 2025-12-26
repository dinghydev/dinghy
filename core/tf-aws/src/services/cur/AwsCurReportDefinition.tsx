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

export const InputSchema = z.object({
  additional_schema_elements: resolvableValue(z.string().array()),
  compression: resolvableValue(z.string()),
  format: resolvableValue(z.string()),
  report_name: resolvableValue(z.string()),
  s3_bucket: resolvableValue(z.string()),
  s3_prefix: resolvableValue(z.string()),
  s3_region: resolvableValue(z.string()),
  time_unit: resolvableValue(z.string()),
  additional_artifacts: resolvableValue(z.string().array().optional()),
  id: resolvableValue(z.string().optional()),
  refresh_closed_reports: resolvableValue(z.boolean().optional()),
  report_versioning: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cur_report_definition

export function AwsCurReportDefinition(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cur_report_definition'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCurReportDefinition = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCurReportDefinition,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCurReportDefinitions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCurReportDefinition,
    idFilter,
    baseNode,
    optional,
  )
