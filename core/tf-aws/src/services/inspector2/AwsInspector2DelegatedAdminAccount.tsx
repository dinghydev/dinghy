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

export const AwsInspector2DelegatedAdminAccountInputSchema = TfMetaSchema
  .extend({
    account_id: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsInspector2DelegatedAdminAccountOutputSchema = z.object({
  relationship_status: z.string().optional(),
})

export type AwsInspector2DelegatedAdminAccountInputProps =
  & z.input<typeof AwsInspector2DelegatedAdminAccountInputSchema>
  & NodeProps

export type AwsInspector2DelegatedAdminAccountOutputProps =
  & z.output<typeof AwsInspector2DelegatedAdminAccountOutputSchema>
  & z.output<typeof AwsInspector2DelegatedAdminAccountInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/inspector2_delegated_admin_account

export function AwsInspector2DelegatedAdminAccount(
  props: Partial<AwsInspector2DelegatedAdminAccountInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_inspector2_delegated_admin_account'
      _category='resource'
      _title={_title}
      _inputSchema={AwsInspector2DelegatedAdminAccountInputSchema}
      _outputSchema={AwsInspector2DelegatedAdminAccountOutputSchema}
      {...props}
    />
  )
}

export const useAwsInspector2DelegatedAdminAccount = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsInspector2DelegatedAdminAccountOutputProps>(
    AwsInspector2DelegatedAdminAccount,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsInspector2DelegatedAdminAccounts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsInspector2DelegatedAdminAccountOutputProps>(
    AwsInspector2DelegatedAdminAccount,
    idFilter,
    baseNode,
    optional,
  )
