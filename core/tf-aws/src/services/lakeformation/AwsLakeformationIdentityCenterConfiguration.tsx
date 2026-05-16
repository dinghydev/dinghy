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

export const AwsLakeformationIdentityCenterConfigurationInputSchema =
  TfMetaSchema.extend({
    instance_arn: resolvableValue(z.string()),
    catalog_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsLakeformationIdentityCenterConfigurationOutputSchema = z.object(
  {
    application_arn: z.string().optional(),
    resource_share: z.string().optional(),
  },
)

export const AwsLakeformationIdentityCenterConfigurationImportSchema = z.object(
  {
    catalog_id: resolvableValue(z.string()),
    account_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export type AwsLakeformationIdentityCenterConfigurationInputProps =
  & z.input<typeof AwsLakeformationIdentityCenterConfigurationInputSchema>
  & z.input<typeof AwsLakeformationIdentityCenterConfigurationImportSchema>
  & NodeProps

export type AwsLakeformationIdentityCenterConfigurationOutputProps =
  & z.output<typeof AwsLakeformationIdentityCenterConfigurationOutputSchema>
  & z.output<typeof AwsLakeformationIdentityCenterConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lakeformation_identity_center_configuration

export function AwsLakeformationIdentityCenterConfiguration(
  props: Partial<AwsLakeformationIdentityCenterConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lakeformation_identity_center_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLakeformationIdentityCenterConfigurationInputSchema}
      _outputSchema={AwsLakeformationIdentityCenterConfigurationOutputSchema}
      _importSchema={AwsLakeformationIdentityCenterConfigurationImportSchema}
      {...props}
    />
  )
}

export const useAwsLakeformationIdentityCenterConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLakeformationIdentityCenterConfigurationOutputProps>(
    AwsLakeformationIdentityCenterConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLakeformationIdentityCenterConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLakeformationIdentityCenterConfigurationOutputProps>(
    AwsLakeformationIdentityCenterConfiguration,
    idFilter,
    baseNode,
    optional,
  )
