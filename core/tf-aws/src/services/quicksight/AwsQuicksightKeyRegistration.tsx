import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/quicksight_key_registration

export const InputSchema = z.object({
  aws_account_id: resolvableValue(z.string().optional()),
  key_registration: resolvableValue(
    z.object({
      default_key: z.boolean().optional(),
      key_arn: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsQuicksightKeyRegistration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_key_registration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightKeyRegistration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsQuicksightKeyRegistration, node, id)

export const useAwsQuicksightKeyRegistrations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsQuicksightKeyRegistration, node, id)
