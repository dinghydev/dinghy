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

export const AwsSsoadminPermissionSetInlinePolicyInputSchema = TfMetaSchema
  .extend({
    inline_policy: resolvableValue(z.string()),
    instance_arn: resolvableValue(z.string()),
    permission_set_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsSsoadminPermissionSetInlinePolicyOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsSsoadminPermissionSetInlinePolicyInputProps =
  & z.input<typeof AwsSsoadminPermissionSetInlinePolicyInputSchema>
  & NodeProps

export type AwsSsoadminPermissionSetInlinePolicyOutputProps =
  & z.output<typeof AwsSsoadminPermissionSetInlinePolicyOutputSchema>
  & z.output<typeof AwsSsoadminPermissionSetInlinePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssoadmin_permission_set_inline_policy

export function AwsSsoadminPermissionSetInlinePolicy(
  props: Partial<AwsSsoadminPermissionSetInlinePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_permission_set_inline_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsoadminPermissionSetInlinePolicyInputSchema}
      _outputSchema={AwsSsoadminPermissionSetInlinePolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminPermissionSetInlinePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsoadminPermissionSetInlinePolicyOutputProps>(
    AwsSsoadminPermissionSetInlinePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsoadminPermissionSetInlinePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsoadminPermissionSetInlinePolicyOutputProps>(
    AwsSsoadminPermissionSetInlinePolicy,
    idFilter,
    baseNode,
    optional,
  )
