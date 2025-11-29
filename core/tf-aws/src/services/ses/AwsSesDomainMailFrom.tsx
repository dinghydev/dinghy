import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ses_domain_mail_from

export const InputSchema = z.object({
  domain: resolvableValue(z.string()),
  mail_from_domain: resolvableValue(z.string()),
  behavior_on_mx_failure: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSesDomainMailFrom(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_domain_mail_from'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSesDomainMailFrom = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSesDomainMailFrom, node, id)

export const useAwsSesDomainMailFroms = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSesDomainMailFrom, node, id)
