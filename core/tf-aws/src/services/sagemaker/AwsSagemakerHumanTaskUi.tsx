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
  human_task_ui_name: resolvableValue(z.string()),
  ui_template: resolvableValue(z.object({
    content: z.string().optional(),
    content_sha256: z.string(),
    url: z.string(),
  })),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  ui_template: z.object({
    content: z.string().optional(),
    content_sha256: z.string(),
    url: z.string(),
  }).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_human_task_ui

export function AwsSagemakerHumanTaskUi(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_human_task_ui'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerHumanTaskUi = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsSagemakerHumanTaskUi, idFilter, baseNode)

export const useAwsSagemakerHumanTaskUis = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsSagemakerHumanTaskUi, idFilter, baseNode)
