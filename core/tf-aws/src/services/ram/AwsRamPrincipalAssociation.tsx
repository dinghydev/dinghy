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

export const AwsRamPrincipalAssociationInputSchema = TfMetaSchema.extend({
  principal: resolvableValue(z.string()),
  resource_share_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsRamPrincipalAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsRamPrincipalAssociationInputProps =
  & z.input<typeof AwsRamPrincipalAssociationInputSchema>
  & NodeProps

export type AwsRamPrincipalAssociationOutputProps =
  & z.output<typeof AwsRamPrincipalAssociationOutputSchema>
  & z.output<typeof AwsRamPrincipalAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ram_principal_association

export function AwsRamPrincipalAssociation(
  props: Partial<AwsRamPrincipalAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ram_principal_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRamPrincipalAssociationInputSchema}
      _outputSchema={AwsRamPrincipalAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRamPrincipalAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRamPrincipalAssociationOutputProps>(
    AwsRamPrincipalAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRamPrincipalAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRamPrincipalAssociationOutputProps>(
    AwsRamPrincipalAssociation,
    idFilter,
    baseNode,
    optional,
  )
