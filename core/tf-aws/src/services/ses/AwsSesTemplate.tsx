import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ses_template

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  html: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  subject: resolvableValue(z.string().optional()),
  text: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSesTemplate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_template'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSesTemplate = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSesTemplate, node, id)

export const useAwsSesTemplates = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSesTemplate, node, id)
