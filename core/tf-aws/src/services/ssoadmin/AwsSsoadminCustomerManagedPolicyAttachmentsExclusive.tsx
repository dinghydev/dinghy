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

export const AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveInputSchema =
  TfMetaSchema.extend({
    instance_arn: resolvableValue(z.string()),
    permission_set_arn: resolvableValue(z.string()),
    customer_managed_policy_reference: resolvableValue(
      z.object({
        name: z.string(),
        path: z.string().optional(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveOutputSchema =
  z.object({})

export const AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveImportSchema =
  z.object({
    instance_arn: resolvableValue(z.string()),
    permission_set_arn: resolvableValue(z.string()),
    account_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export type AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveInputProps =
  & z.input<
    typeof AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveInputSchema
  >
  & z.input<
    typeof AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveImportSchema
  >
  & NodeProps

export type AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveOutputProps =
  & z.output<
    typeof AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveOutputSchema
  >
  & z.output<
    typeof AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive

export function AwsSsoadminCustomerManagedPolicyAttachmentsExclusive(
  props: Partial<
    AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveInputProps
  >,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_customer_managed_policy_attachments_exclusive'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveInputSchema}
      _outputSchema={AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveOutputSchema}
      _importSchema={AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveImportSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminCustomerManagedPolicyAttachmentsExclusive = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveOutputProps>(
    AwsSsoadminCustomerManagedPolicyAttachmentsExclusive,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsoadminCustomerManagedPolicyAttachmentsExclusives = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<
    AwsSsoadminCustomerManagedPolicyAttachmentsExclusiveOutputProps
  >(
    AwsSsoadminCustomerManagedPolicyAttachmentsExclusive,
    idFilter,
    baseNode,
    optional,
  )
