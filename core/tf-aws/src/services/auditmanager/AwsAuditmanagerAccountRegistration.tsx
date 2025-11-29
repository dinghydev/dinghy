import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/auditmanager_account_registration

export const InputSchema = z.object({
  delegated_admin_account: resolvableValue(z.string().optional()),
  deregister_on_destroy: resolvableValue(z.boolean().optional()),
  kms_key: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAuditmanagerAccountRegistration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_auditmanager_account_registration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAuditmanagerAccountRegistration = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsAuditmanagerAccountRegistration, node, id)

export const useAwsAuditmanagerAccountRegistrations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsAuditmanagerAccountRegistration, node, id)
