import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/acmpca_permission

export const InputSchema = z.object({
  actions: resolvableValue(z.string().array()),
  certificate_authority_arn: resolvableValue(z.string()),
  principal: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  source_account: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  policy: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAcmpcaPermission(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_acmpca_permission'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAcmpcaPermission = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAcmpcaPermission, node, id)

export const useAwsAcmpcaPermissions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAcmpcaPermission, node, id)
