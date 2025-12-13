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
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  template_name: resolvableValue(z.string()),
  email_template: resolvableValue(
    z.object({
      default_substitutions: z.string().optional(),
      description: z.string().optional(),
      html_part: z.string().optional(),
      recommender_id: z.string().optional(),
      subject: z.string().optional(),
      text_part: z.string().optional(),
      header: z.object({
        name: z.string().optional(),
        value: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/pinpoint_email_template

export function AwsPinpointEmailTemplate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_email_template'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointEmailTemplate = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsPinpointEmailTemplate, idFilter, baseNode)

export const useAwsPinpointEmailTemplates = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsPinpointEmailTemplate, idFilter, baseNode)
