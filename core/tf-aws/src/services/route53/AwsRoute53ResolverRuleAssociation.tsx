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

export const AwsRoute53ResolverRuleAssociationInputSchema = TfMetaSchema.extend(
  {
    resolver_rule_id: resolvableValue(z.string()),
    vpc_id: resolvableValue(z.string()),
    name: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  },
)

export const AwsRoute53ResolverRuleAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsRoute53ResolverRuleAssociationImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsRoute53ResolverRuleAssociationInputProps =
  & z.input<typeof AwsRoute53ResolverRuleAssociationInputSchema>
  & z.input<typeof AwsRoute53ResolverRuleAssociationImportSchema>
  & NodeProps

export type AwsRoute53ResolverRuleAssociationOutputProps =
  & z.output<typeof AwsRoute53ResolverRuleAssociationOutputSchema>
  & z.output<typeof AwsRoute53ResolverRuleAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_resolver_rule_association

export function AwsRoute53ResolverRuleAssociation(
  props: Partial<AwsRoute53ResolverRuleAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_rule_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53ResolverRuleAssociationInputSchema}
      _outputSchema={AwsRoute53ResolverRuleAssociationOutputSchema}
      _importSchema={AwsRoute53ResolverRuleAssociationImportSchema}
      {...props}
    />
  )
}

export const useAwsRoute53ResolverRuleAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53ResolverRuleAssociationOutputProps>(
    AwsRoute53ResolverRuleAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53ResolverRuleAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53ResolverRuleAssociationOutputProps>(
    AwsRoute53ResolverRuleAssociation,
    idFilter,
    baseNode,
    optional,
  )
