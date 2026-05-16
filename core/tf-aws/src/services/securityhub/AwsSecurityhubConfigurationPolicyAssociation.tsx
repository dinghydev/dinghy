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

export const AwsSecurityhubConfigurationPolicyAssociationInputSchema =
  TfMetaSchema.extend({
    policy_id: resolvableValue(z.string()),
    target_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsSecurityhubConfigurationPolicyAssociationOutputSchema = z
  .object({
    id: z.string().optional(),
  })

export const AwsSecurityhubConfigurationPolicyAssociationImportSchema = z
  .object({
    target_id: resolvableValue(z.string()),
    account_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export type AwsSecurityhubConfigurationPolicyAssociationInputProps =
  & z.input<typeof AwsSecurityhubConfigurationPolicyAssociationInputSchema>
  & z.input<typeof AwsSecurityhubConfigurationPolicyAssociationImportSchema>
  & NodeProps

export type AwsSecurityhubConfigurationPolicyAssociationOutputProps =
  & z.output<typeof AwsSecurityhubConfigurationPolicyAssociationOutputSchema>
  & z.output<typeof AwsSecurityhubConfigurationPolicyAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securityhub_configuration_policy_association

export function AwsSecurityhubConfigurationPolicyAssociation(
  props: Partial<AwsSecurityhubConfigurationPolicyAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_configuration_policy_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecurityhubConfigurationPolicyAssociationInputSchema}
      _outputSchema={AwsSecurityhubConfigurationPolicyAssociationOutputSchema}
      _importSchema={AwsSecurityhubConfigurationPolicyAssociationImportSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubConfigurationPolicyAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecurityhubConfigurationPolicyAssociationOutputProps>(
    AwsSecurityhubConfigurationPolicyAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecurityhubConfigurationPolicyAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecurityhubConfigurationPolicyAssociationOutputProps>(
    AwsSecurityhubConfigurationPolicyAssociation,
    idFilter,
    baseNode,
    optional,
  )
