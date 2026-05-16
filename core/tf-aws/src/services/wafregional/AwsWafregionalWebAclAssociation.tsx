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

export const AwsWafregionalWebAclAssociationInputSchema = TfMetaSchema.extend({
  resource_arn: resolvableValue(z.string()),
  web_acl_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const AwsWafregionalWebAclAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsWafregionalWebAclAssociationInputProps =
  & z.input<typeof AwsWafregionalWebAclAssociationInputSchema>
  & NodeProps

export type AwsWafregionalWebAclAssociationOutputProps =
  & z.output<typeof AwsWafregionalWebAclAssociationOutputSchema>
  & z.output<typeof AwsWafregionalWebAclAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafregional_web_acl_association

export function AwsWafregionalWebAclAssociation(
  props: Partial<AwsWafregionalWebAclAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_web_acl_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafregionalWebAclAssociationInputSchema}
      _outputSchema={AwsWafregionalWebAclAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalWebAclAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafregionalWebAclAssociationOutputProps>(
    AwsWafregionalWebAclAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafregionalWebAclAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafregionalWebAclAssociationOutputProps>(
    AwsWafregionalWebAclAssociation,
    idFilter,
    baseNode,
    optional,
  )
