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
  email_identity: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  policy_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sesv2_email_identity_policy

export function AwsSesv2EmailIdentityPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_email_identity_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2EmailIdentityPolicy = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsSesv2EmailIdentityPolicy, idFilter, baseNode)

export const useAwsSesv2EmailIdentityPolicys = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsSesv2EmailIdentityPolicy, idFilter, baseNode)
