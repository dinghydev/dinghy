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

export const AwsSesTemplateInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  html: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  subject: resolvableValue(z.string().optional()),
  text: resolvableValue(z.string().optional()),
})

export const AwsSesTemplateOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsSesTemplateInputProps =
  & z.input<typeof AwsSesTemplateInputSchema>
  & NodeProps

export type AwsSesTemplateOutputProps =
  & z.output<typeof AwsSesTemplateOutputSchema>
  & z.output<typeof AwsSesTemplateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ses_template

export function AwsSesTemplate(props: Partial<AwsSesTemplateInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_template'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesTemplateInputSchema}
      _outputSchema={AwsSesTemplateOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesTemplateOutputProps>(
    AwsSesTemplate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesTemplates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesTemplateOutputProps>(
    AwsSesTemplate,
    idFilter,
    baseNode,
    optional,
  )
