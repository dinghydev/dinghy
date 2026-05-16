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

export const AwsConnectPhoneNumberContactFlowAssociationInputSchema =
  TfMetaSchema.extend({
    contact_flow_id: resolvableValue(z.string()),
    instance_id: resolvableValue(z.string()),
    phone_number_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsConnectPhoneNumberContactFlowAssociationOutputSchema = z.object(
  {},
)

export type AwsConnectPhoneNumberContactFlowAssociationInputProps =
  & z.input<typeof AwsConnectPhoneNumberContactFlowAssociationInputSchema>
  & NodeProps

export type AwsConnectPhoneNumberContactFlowAssociationOutputProps =
  & z.output<typeof AwsConnectPhoneNumberContactFlowAssociationOutputSchema>
  & z.output<typeof AwsConnectPhoneNumberContactFlowAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/connect_phone_number_contact_flow_association

export function AwsConnectPhoneNumberContactFlowAssociation(
  props: Partial<AwsConnectPhoneNumberContactFlowAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_phone_number_contact_flow_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConnectPhoneNumberContactFlowAssociationInputSchema}
      _outputSchema={AwsConnectPhoneNumberContactFlowAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectPhoneNumberContactFlowAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConnectPhoneNumberContactFlowAssociationOutputProps>(
    AwsConnectPhoneNumberContactFlowAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConnectPhoneNumberContactFlowAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConnectPhoneNumberContactFlowAssociationOutputProps>(
    AwsConnectPhoneNumberContactFlowAssociation,
    idFilter,
    baseNode,
    optional,
  )
