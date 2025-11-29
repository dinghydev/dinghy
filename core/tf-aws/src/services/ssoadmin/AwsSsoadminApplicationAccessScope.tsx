import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssoadmin_application_access_scope

export const InputSchema = z.object({
  application_arn: resolvableValue(z.string()),
  scope: resolvableValue(z.string()),
  authorized_targets: resolvableValue(z.string().array().optional()),
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

export function AwsSsoadminApplicationAccessScope(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_application_access_scope'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminApplicationAccessScope = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSsoadminApplicationAccessScope, node, id)

export const useAwsSsoadminApplicationAccessScopes = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsSsoadminApplicationAccessScope, node, id)
