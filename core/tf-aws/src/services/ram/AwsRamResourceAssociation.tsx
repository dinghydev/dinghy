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

export const AwsRamResourceAssociationInputSchema = TfMetaSchema.extend({
  resource_arn: resolvableValue(z.string()),
  resource_share_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsRamResourceAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsRamResourceAssociationInputProps =
  & z.input<typeof AwsRamResourceAssociationInputSchema>
  & NodeProps

export type AwsRamResourceAssociationOutputProps =
  & z.output<typeof AwsRamResourceAssociationOutputSchema>
  & z.output<typeof AwsRamResourceAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ram_resource_association

export function AwsRamResourceAssociation(
  props: Partial<AwsRamResourceAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ram_resource_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRamResourceAssociationInputSchema}
      _outputSchema={AwsRamResourceAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRamResourceAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRamResourceAssociationOutputProps>(
    AwsRamResourceAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRamResourceAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRamResourceAssociationOutputProps>(
    AwsRamResourceAssociation,
    idFilter,
    baseNode,
    optional,
  )
