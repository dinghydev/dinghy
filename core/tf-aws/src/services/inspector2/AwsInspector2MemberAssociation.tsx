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

export const AwsInspector2MemberAssociationInputSchema = TfMetaSchema.extend({
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

export const AwsInspector2MemberAssociationOutputSchema = z.object({
  delegated_admin_account_id: z.string().optional(),
  relationship_status: z.string().optional(),
  updated_at: z.string().optional(),
})

export type AwsInspector2MemberAssociationInputProps =
  & z.input<typeof AwsInspector2MemberAssociationInputSchema>
  & NodeProps

export type AwsInspector2MemberAssociationOutputProps =
  & z.output<typeof AwsInspector2MemberAssociationOutputSchema>
  & z.output<typeof AwsInspector2MemberAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/inspector2_member_association

export function AwsInspector2MemberAssociation(
  props: Partial<AwsInspector2MemberAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_inspector2_member_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsInspector2MemberAssociationInputSchema}
      _outputSchema={AwsInspector2MemberAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsInspector2MemberAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsInspector2MemberAssociationOutputProps>(
    AwsInspector2MemberAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsInspector2MemberAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsInspector2MemberAssociationOutputProps>(
    AwsInspector2MemberAssociation,
    idFilter,
    baseNode,
    optional,
  )
