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

export const AwsInspectorAssessmentTemplateInputSchema = TfMetaSchema.extend({
  duration: resolvableValue(z.number()),
  name: resolvableValue(z.string()),
  rules_package_arns: resolvableValue(z.string().array()),
  target_arn: resolvableValue(z.string()),
  event_subscription: resolvableValue(
    z.object({
      event: z.string(),
      topic_arn: z.string(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsInspectorAssessmentTemplateOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsInspectorAssessmentTemplateImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsInspectorAssessmentTemplateInputProps =
  & z.input<typeof AwsInspectorAssessmentTemplateInputSchema>
  & z.input<typeof AwsInspectorAssessmentTemplateImportSchema>
  & NodeProps

export type AwsInspectorAssessmentTemplateOutputProps =
  & z.output<typeof AwsInspectorAssessmentTemplateOutputSchema>
  & z.output<typeof AwsInspectorAssessmentTemplateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/inspector_assessment_template

export function AwsInspectorAssessmentTemplate(
  props: Partial<AwsInspectorAssessmentTemplateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_inspector_assessment_template'
      _category='resource'
      _title={_title}
      _inputSchema={AwsInspectorAssessmentTemplateInputSchema}
      _outputSchema={AwsInspectorAssessmentTemplateOutputSchema}
      _importSchema={AwsInspectorAssessmentTemplateImportSchema}
      {...props}
    />
  )
}

export const useAwsInspectorAssessmentTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsInspectorAssessmentTemplateOutputProps>(
    AwsInspectorAssessmentTemplate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsInspectorAssessmentTemplates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsInspectorAssessmentTemplateOutputProps>(
    AwsInspectorAssessmentTemplate,
    idFilter,
    baseNode,
    optional,
  )
