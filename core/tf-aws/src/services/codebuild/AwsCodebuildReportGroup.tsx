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

export const AwsCodebuildReportGroupInputSchema = TfMetaSchema.extend({
  export_config: resolvableValue(z.object({
    type: z.string(),
    s3_destination: z.object({
      bucket: z.string(),
      encryption_disabled: z.boolean().optional(),
      encryption_key: z.string(),
      packaging: z.string().optional(),
      path: z.string().optional(),
    }).optional(),
  })),
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  delete_reports: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCodebuildReportGroupOutputSchema = z.object({
  arn: z.string().optional(),
  created: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsCodebuildReportGroupImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsCodebuildReportGroupInputProps =
  & z.input<typeof AwsCodebuildReportGroupInputSchema>
  & z.input<typeof AwsCodebuildReportGroupImportSchema>
  & NodeProps

export type AwsCodebuildReportGroupOutputProps =
  & z.output<typeof AwsCodebuildReportGroupOutputSchema>
  & z.output<typeof AwsCodebuildReportGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codebuild_report_group

export function AwsCodebuildReportGroup(
  props: Partial<AwsCodebuildReportGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codebuild_report_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodebuildReportGroupInputSchema}
      _outputSchema={AwsCodebuildReportGroupOutputSchema}
      _importSchema={AwsCodebuildReportGroupImportSchema}
      {...props}
    />
  )
}

export const useAwsCodebuildReportGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodebuildReportGroupOutputProps>(
    AwsCodebuildReportGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodebuildReportGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodebuildReportGroupOutputProps>(
    AwsCodebuildReportGroup,
    idFilter,
    baseNode,
    optional,
  )
