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
  application_arn: resolvableValue(z.string()),
  scope: resolvableValue(z.string()),
  authorized_targets: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssoadmin_application_access_scope

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

export const useAwsSsoadminApplicationAccessScope = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    AwsSsoadminApplicationAccessScope,
    idFilter,
    baseNode,
  )

export const useAwsSsoadminApplicationAccessScopes = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsSsoadminApplicationAccessScope,
    idFilter,
    baseNode,
  )
