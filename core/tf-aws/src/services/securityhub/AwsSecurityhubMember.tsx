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

export const AwsSecurityhubMemberInputSchema = TfMetaSchema.extend({
  account_id: resolvableValue(z.string()),
  email: resolvableValue(z.string().optional()),
  invite: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSecurityhubMemberOutputSchema = z.object({
  id: z.string().optional(),
  master_id: z.string().optional(),
  member_status: z.string().optional(),
})

export const AwsSecurityhubMemberImportSchema = z.object({
  member_account_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSecurityhubMemberInputProps =
  & z.input<typeof AwsSecurityhubMemberInputSchema>
  & z.input<typeof AwsSecurityhubMemberImportSchema>
  & NodeProps

export type AwsSecurityhubMemberOutputProps =
  & z.output<typeof AwsSecurityhubMemberOutputSchema>
  & z.output<typeof AwsSecurityhubMemberInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securityhub_member

export function AwsSecurityhubMember(
  props: Partial<AwsSecurityhubMemberInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_member'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecurityhubMemberInputSchema}
      _outputSchema={AwsSecurityhubMemberOutputSchema}
      _importSchema={AwsSecurityhubMemberImportSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubMember = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecurityhubMemberOutputProps>(
    AwsSecurityhubMember,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecurityhubMembers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecurityhubMemberOutputProps>(
    AwsSecurityhubMember,
    idFilter,
    baseNode,
    optional,
  )
