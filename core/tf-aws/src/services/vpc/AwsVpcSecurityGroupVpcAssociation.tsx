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

export const AwsVpcSecurityGroupVpcAssociationInputSchema = TfMetaSchema.extend(
  {
    security_group_id: resolvableValue(z.string()),
    vpc_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  },
)

export const AwsVpcSecurityGroupVpcAssociationOutputSchema = z.object({
  state: z.string().optional(),
})

export const AwsVpcSecurityGroupVpcAssociationImportSchema = z.object({
  security_group_id: resolvableValue(z.string()),
  vpc_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsVpcSecurityGroupVpcAssociationInputProps =
  & z.input<typeof AwsVpcSecurityGroupVpcAssociationInputSchema>
  & z.input<typeof AwsVpcSecurityGroupVpcAssociationImportSchema>
  & NodeProps

export type AwsVpcSecurityGroupVpcAssociationOutputProps =
  & z.output<typeof AwsVpcSecurityGroupVpcAssociationOutputSchema>
  & z.output<typeof AwsVpcSecurityGroupVpcAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_security_group_vpc_association

export function AwsVpcSecurityGroupVpcAssociation(
  props: Partial<AwsVpcSecurityGroupVpcAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_security_group_vpc_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcSecurityGroupVpcAssociationInputSchema}
      _outputSchema={AwsVpcSecurityGroupVpcAssociationOutputSchema}
      _importSchema={AwsVpcSecurityGroupVpcAssociationImportSchema}
      {...props}
    />
  )
}

export const useAwsVpcSecurityGroupVpcAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcSecurityGroupVpcAssociationOutputProps>(
    AwsVpcSecurityGroupVpcAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcSecurityGroupVpcAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcSecurityGroupVpcAssociationOutputProps>(
    AwsVpcSecurityGroupVpcAssociation,
    idFilter,
    baseNode,
    optional,
  )
