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

export const AwsRoute53ResolverQueryLogConfigAssociationInputSchema =
  TfMetaSchema.extend({
    resolver_query_log_config_id: resolvableValue(z.string()),
    resource_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsRoute53ResolverQueryLogConfigAssociationOutputSchema = z.object(
  {
    id: z.string().optional(),
  },
)

export type AwsRoute53ResolverQueryLogConfigAssociationInputProps =
  & z.input<typeof AwsRoute53ResolverQueryLogConfigAssociationInputSchema>
  & NodeProps

export type AwsRoute53ResolverQueryLogConfigAssociationOutputProps =
  & z.output<typeof AwsRoute53ResolverQueryLogConfigAssociationOutputSchema>
  & z.output<typeof AwsRoute53ResolverQueryLogConfigAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_resolver_query_log_config_association

export function AwsRoute53ResolverQueryLogConfigAssociation(
  props: Partial<AwsRoute53ResolverQueryLogConfigAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_query_log_config_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53ResolverQueryLogConfigAssociationInputSchema}
      _outputSchema={AwsRoute53ResolverQueryLogConfigAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53ResolverQueryLogConfigAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53ResolverQueryLogConfigAssociationOutputProps>(
    AwsRoute53ResolverQueryLogConfigAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53ResolverQueryLogConfigAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53ResolverQueryLogConfigAssociationOutputProps>(
    AwsRoute53ResolverQueryLogConfigAssociation,
    idFilter,
    baseNode,
    optional,
  )
