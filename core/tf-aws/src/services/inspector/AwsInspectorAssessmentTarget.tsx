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

export const AwsInspectorAssessmentTargetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  resource_group_arn: resolvableValue(z.string().optional()),
})

export const AwsInspectorAssessmentTargetOutputSchema = z.object({
  arn: z.string().optional(),
})

export const AwsInspectorAssessmentTargetImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsInspectorAssessmentTargetInputProps =
  & z.input<typeof AwsInspectorAssessmentTargetInputSchema>
  & z.input<typeof AwsInspectorAssessmentTargetImportSchema>
  & NodeProps

export type AwsInspectorAssessmentTargetOutputProps =
  & z.output<typeof AwsInspectorAssessmentTargetOutputSchema>
  & z.output<typeof AwsInspectorAssessmentTargetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/inspector_assessment_target

export function AwsInspectorAssessmentTarget(
  props: Partial<AwsInspectorAssessmentTargetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_inspector_assessment_target'
      _category='resource'
      _title={_title}
      _inputSchema={AwsInspectorAssessmentTargetInputSchema}
      _outputSchema={AwsInspectorAssessmentTargetOutputSchema}
      _importSchema={AwsInspectorAssessmentTargetImportSchema}
      {...props}
    />
  )
}

export const useAwsInspectorAssessmentTarget = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsInspectorAssessmentTargetOutputProps>(
    AwsInspectorAssessmentTarget,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsInspectorAssessmentTargets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsInspectorAssessmentTargetOutputProps>(
    AwsInspectorAssessmentTarget,
    idFilter,
    baseNode,
    optional,
  )
