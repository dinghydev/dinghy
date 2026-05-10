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

export const InputSchema = TfMetaSchema.extend({
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

export const OutputSchema = z.object({})

export const ImportSchema = z.object({
  instance_arn: resolvableValue(z.string()),
  permission_set_arn: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive

export function AwsSsoadminManagedPolicyAttachmentsExclusive(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminManagedPolicyAttachmentsExclusive = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsSsoadminManagedPolicyAttachmentsExclusive,
    idFilter,
    baseNode,
    optional,
  )
