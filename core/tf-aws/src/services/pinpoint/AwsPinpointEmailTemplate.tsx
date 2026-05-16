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

export const AwsPinpointEmailTemplateInputSchema = TfMetaSchema.extend({
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
})

export const AwsPinpointEmailTemplateOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsPinpointEmailTemplateInputProps =
  & z.input<typeof AwsPinpointEmailTemplateInputSchema>
  & NodeProps

export type AwsPinpointEmailTemplateOutputProps =
  & z.output<typeof AwsPinpointEmailTemplateOutputSchema>
  & z.output<typeof AwsPinpointEmailTemplateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_email_template

export function AwsPinpointEmailTemplate(
  props: Partial<AwsPinpointEmailTemplateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_email_template'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPinpointEmailTemplateInputSchema}
      _outputSchema={AwsPinpointEmailTemplateOutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointEmailTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPinpointEmailTemplateOutputProps>(
    AwsPinpointEmailTemplate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPinpointEmailTemplates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPinpointEmailTemplateOutputProps>(
    AwsPinpointEmailTemplate,
    idFilter,
    baseNode,
    optional,
  )
