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

export const AwsEipAssociationInputSchema = TfMetaSchema.extend({
  allocation_id: resolvableValue(z.string().optional()),
  allow_reassociation: resolvableValue(z.boolean().optional()),
  instance_id: resolvableValue(z.string().optional()),
  network_interface_id: resolvableValue(z.string().optional()),
  private_ip_address: resolvableValue(z.string().optional()),
  public_ip: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEipAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsEipAssociationInputProps =
  & z.input<typeof AwsEipAssociationInputSchema>
  & NodeProps

export type AwsEipAssociationOutputProps =
  & z.output<typeof AwsEipAssociationOutputSchema>
  & z.output<typeof AwsEipAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/eip_association

export function AwsEipAssociation(props: Partial<AwsEipAssociationInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eip_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEipAssociationInputSchema}
      _outputSchema={AwsEipAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEipAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEipAssociationOutputProps>(
    AwsEipAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEipAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEipAssociationOutputProps>(
    AwsEipAssociation,
    idFilter,
    baseNode,
    optional,
  )
