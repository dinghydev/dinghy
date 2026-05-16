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

export const AwsOpensearchPackageAssociationInputSchema = TfMetaSchema.extend({
  domain_name: resolvableValue(z.string()),
  package_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsOpensearchPackageAssociationOutputSchema = z.object({
  id: z.string().optional(),
  reference_path: z.string().optional(),
})

export type AwsOpensearchPackageAssociationInputProps =
  & z.input<typeof AwsOpensearchPackageAssociationInputSchema>
  & NodeProps

export type AwsOpensearchPackageAssociationOutputProps =
  & z.output<typeof AwsOpensearchPackageAssociationOutputSchema>
  & z.output<typeof AwsOpensearchPackageAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearch_package_association

export function AwsOpensearchPackageAssociation(
  props: Partial<AwsOpensearchPackageAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearch_package_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOpensearchPackageAssociationInputSchema}
      _outputSchema={AwsOpensearchPackageAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchPackageAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOpensearchPackageAssociationOutputProps>(
    AwsOpensearchPackageAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOpensearchPackageAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOpensearchPackageAssociationOutputProps>(
    AwsOpensearchPackageAssociation,
    idFilter,
    baseNode,
    optional,
  )
