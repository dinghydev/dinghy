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

export const AwsWafv2WebAclAssociationInputSchema = TfMetaSchema.extend({
  resource_arn: resolvableValue(z.string()),
  web_acl_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const AwsWafv2WebAclAssociationOutputSchema = z.object({})

export type AwsWafv2WebAclAssociationInputProps =
  & z.input<typeof AwsWafv2WebAclAssociationInputSchema>
  & NodeProps

export type AwsWafv2WebAclAssociationOutputProps =
  & z.output<typeof AwsWafv2WebAclAssociationOutputSchema>
  & z.output<typeof AwsWafv2WebAclAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafv2_web_acl_association

export function AwsWafv2WebAclAssociation(
  props: Partial<AwsWafv2WebAclAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafv2_web_acl_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafv2WebAclAssociationInputSchema}
      _outputSchema={AwsWafv2WebAclAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafv2WebAclAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafv2WebAclAssociationOutputProps>(
    AwsWafv2WebAclAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafv2WebAclAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafv2WebAclAssociationOutputProps>(
    AwsWafv2WebAclAssociation,
    idFilter,
    baseNode,
    optional,
  )
