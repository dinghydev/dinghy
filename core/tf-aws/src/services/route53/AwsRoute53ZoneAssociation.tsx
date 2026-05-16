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

export const AwsRoute53ZoneAssociationInputSchema = TfMetaSchema.extend({
  vpc_id: resolvableValue(z.string()),
  zone_id: resolvableValue(z.string()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
  vpc_region: resolvableValue(z.string().optional()),
})

export const AwsRoute53ZoneAssociationOutputSchema = z.object({
  id: z.string().optional(),
  owning_account: z.string().optional(),
})

export type AwsRoute53ZoneAssociationInputProps =
  & z.input<typeof AwsRoute53ZoneAssociationInputSchema>
  & NodeProps

export type AwsRoute53ZoneAssociationOutputProps =
  & z.output<typeof AwsRoute53ZoneAssociationOutputSchema>
  & z.output<typeof AwsRoute53ZoneAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_zone_association

export function AwsRoute53ZoneAssociation(
  props: Partial<AwsRoute53ZoneAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_zone_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53ZoneAssociationInputSchema}
      _outputSchema={AwsRoute53ZoneAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53ZoneAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53ZoneAssociationOutputProps>(
    AwsRoute53ZoneAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53ZoneAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53ZoneAssociationOutputProps>(
    AwsRoute53ZoneAssociation,
    idFilter,
    baseNode,
    optional,
  )
