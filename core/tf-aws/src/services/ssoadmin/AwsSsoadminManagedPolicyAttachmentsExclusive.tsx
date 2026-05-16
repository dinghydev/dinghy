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

export const AwsSsoadminManagedPolicyAttachmentsExclusiveInputSchema =
  TfMetaSchema.extend({
    instance_arn: resolvableValue(z.string()),
    managed_policy_arns: resolvableValue(z.string().array()),
    permission_set_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsSsoadminManagedPolicyAttachmentsExclusiveOutputSchema = z
  .object({})

export const AwsSsoadminManagedPolicyAttachmentsExclusiveImportSchema = z
  .object({
    instance_arn: resolvableValue(z.string()),
    permission_set_arn: resolvableValue(z.string()),
    account_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export type AwsSsoadminManagedPolicyAttachmentsExclusiveInputProps =
  & z.input<typeof AwsSsoadminManagedPolicyAttachmentsExclusiveInputSchema>
  & z.input<typeof AwsSsoadminManagedPolicyAttachmentsExclusiveImportSchema>
  & NodeProps

export type AwsSsoadminManagedPolicyAttachmentsExclusiveOutputProps =
  & z.output<typeof AwsSsoadminManagedPolicyAttachmentsExclusiveOutputSchema>
  & z.output<typeof AwsSsoadminManagedPolicyAttachmentsExclusiveInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive

export function AwsSsoadminManagedPolicyAttachmentsExclusive(
  props: Partial<AwsSsoadminManagedPolicyAttachmentsExclusiveInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_managed_policy_attachments_exclusive'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsoadminManagedPolicyAttachmentsExclusiveInputSchema}
      _outputSchema={AwsSsoadminManagedPolicyAttachmentsExclusiveOutputSchema}
      _importSchema={AwsSsoadminManagedPolicyAttachmentsExclusiveImportSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminManagedPolicyAttachmentsExclusive = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsoadminManagedPolicyAttachmentsExclusiveOutputProps>(
    AwsSsoadminManagedPolicyAttachmentsExclusive,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsoadminManagedPolicyAttachmentsExclusives = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsoadminManagedPolicyAttachmentsExclusiveOutputProps>(
    AwsSsoadminManagedPolicyAttachmentsExclusive,
    idFilter,
    baseNode,
    optional,
  )
