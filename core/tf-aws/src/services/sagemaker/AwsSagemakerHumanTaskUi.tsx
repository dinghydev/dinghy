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

export const AwsSagemakerHumanTaskUiInputSchema = TfMetaSchema.extend({
  human_task_ui_name: resolvableValue(z.string()),
  ui_template: resolvableValue(z.object({
    content: z.string().optional(),
    content_sha256: z.string().optional(),
    url: z.string().optional(),
  })),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSagemakerHumanTaskUiOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  ui_template: z.object({
    content: z.string().optional(),
    content_sha256: z.string().optional(),
    url: z.string().optional(),
  }).optional(),
})

export type AwsSagemakerHumanTaskUiInputProps =
  & z.input<typeof AwsSagemakerHumanTaskUiInputSchema>
  & NodeProps

export type AwsSagemakerHumanTaskUiOutputProps =
  & z.output<typeof AwsSagemakerHumanTaskUiOutputSchema>
  & z.output<typeof AwsSagemakerHumanTaskUiInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_human_task_ui

export function AwsSagemakerHumanTaskUi(
  props: Partial<AwsSagemakerHumanTaskUiInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_human_task_ui'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerHumanTaskUiInputSchema}
      _outputSchema={AwsSagemakerHumanTaskUiOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerHumanTaskUi = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerHumanTaskUiOutputProps>(
    AwsSagemakerHumanTaskUi,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerHumanTaskUis = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerHumanTaskUiOutputProps>(
    AwsSagemakerHumanTaskUi,
    idFilter,
    baseNode,
    optional,
  )
