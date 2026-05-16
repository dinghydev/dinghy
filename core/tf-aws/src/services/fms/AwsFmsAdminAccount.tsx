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

export const AwsFmsAdminAccountInputSchema = TfMetaSchema.extend({
  account_id: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsFmsAdminAccountOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsFmsAdminAccountInputProps =
  & z.input<typeof AwsFmsAdminAccountInputSchema>
  & NodeProps

export type AwsFmsAdminAccountOutputProps =
  & z.output<typeof AwsFmsAdminAccountOutputSchema>
  & z.output<typeof AwsFmsAdminAccountInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/fms_admin_account

export function AwsFmsAdminAccount(
  props: Partial<AwsFmsAdminAccountInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fms_admin_account'
      _category='resource'
      _title={_title}
      _inputSchema={AwsFmsAdminAccountInputSchema}
      _outputSchema={AwsFmsAdminAccountOutputSchema}
      {...props}
    />
  )
}

export const useAwsFmsAdminAccount = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsFmsAdminAccountOutputProps>(
    AwsFmsAdminAccount,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsFmsAdminAccounts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsFmsAdminAccountOutputProps>(
    AwsFmsAdminAccount,
    idFilter,
    baseNode,
    optional,
  )
