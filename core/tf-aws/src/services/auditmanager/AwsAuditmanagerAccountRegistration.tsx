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

export const AwsAuditmanagerAccountRegistrationInputSchema = TfMetaSchema
  .extend({
    delegated_admin_account: resolvableValue(z.string().optional()),
    deregister_on_destroy: resolvableValue(z.boolean().optional()),
    kms_key: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsAuditmanagerAccountRegistrationOutputSchema = z.object({
  id: z.string().optional(),
  status: z.string().optional(),
})

export type AwsAuditmanagerAccountRegistrationInputProps =
  & z.input<typeof AwsAuditmanagerAccountRegistrationInputSchema>
  & NodeProps

export type AwsAuditmanagerAccountRegistrationOutputProps =
  & z.output<typeof AwsAuditmanagerAccountRegistrationOutputSchema>
  & z.output<typeof AwsAuditmanagerAccountRegistrationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/auditmanager_account_registration

export function AwsAuditmanagerAccountRegistration(
  props: Partial<AwsAuditmanagerAccountRegistrationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_auditmanager_account_registration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAuditmanagerAccountRegistrationInputSchema}
      _outputSchema={AwsAuditmanagerAccountRegistrationOutputSchema}
      {...props}
    />
  )
}

export const useAwsAuditmanagerAccountRegistration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAuditmanagerAccountRegistrationOutputProps>(
    AwsAuditmanagerAccountRegistration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAuditmanagerAccountRegistrations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAuditmanagerAccountRegistrationOutputProps>(
    AwsAuditmanagerAccountRegistration,
    idFilter,
    baseNode,
    optional,
  )
