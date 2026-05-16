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

export const AwsRoute53profilesAssociationInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  profile_id: resolvableValue(z.string()),
  resource_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRoute53profilesAssociationOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  status: z.string().optional(),
  status_message: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRoute53profilesAssociationInputProps =
  & z.input<typeof AwsRoute53profilesAssociationInputSchema>
  & NodeProps

export type AwsRoute53profilesAssociationOutputProps =
  & z.output<typeof AwsRoute53profilesAssociationOutputSchema>
  & z.output<typeof AwsRoute53profilesAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53profiles_association

export function AwsRoute53profilesAssociation(
  props: Partial<AwsRoute53profilesAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53profiles_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53profilesAssociationInputSchema}
      _outputSchema={AwsRoute53profilesAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53profilesAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53profilesAssociationOutputProps>(
    AwsRoute53profilesAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53profilesAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53profilesAssociationOutputProps>(
    AwsRoute53profilesAssociation,
    idFilter,
    baseNode,
    optional,
  )
