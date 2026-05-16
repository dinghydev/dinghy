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

export const AwsShieldProtectionHealthCheckAssociationInputSchema = TfMetaSchema
  .extend({
    health_check_arn: resolvableValue(z.string()),
    shield_protection_id: resolvableValue(z.string()),
  })

export const AwsShieldProtectionHealthCheckAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsShieldProtectionHealthCheckAssociationInputProps =
  & z.input<typeof AwsShieldProtectionHealthCheckAssociationInputSchema>
  & NodeProps

export type AwsShieldProtectionHealthCheckAssociationOutputProps =
  & z.output<typeof AwsShieldProtectionHealthCheckAssociationOutputSchema>
  & z.output<typeof AwsShieldProtectionHealthCheckAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/shield_protection_health_check_association

export function AwsShieldProtectionHealthCheckAssociation(
  props: Partial<AwsShieldProtectionHealthCheckAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_shield_protection_health_check_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsShieldProtectionHealthCheckAssociationInputSchema}
      _outputSchema={AwsShieldProtectionHealthCheckAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsShieldProtectionHealthCheckAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsShieldProtectionHealthCheckAssociationOutputProps>(
    AwsShieldProtectionHealthCheckAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsShieldProtectionHealthCheckAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsShieldProtectionHealthCheckAssociationOutputProps>(
    AwsShieldProtectionHealthCheckAssociation,
    idFilter,
    baseNode,
    optional,
  )
