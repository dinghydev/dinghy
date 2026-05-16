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

export const AwsArczonalshiftZonalAutoshiftConfigurationInputSchema =
  TfMetaSchema.extend({
    resource_arn: resolvableValue(z.string()),
    zonal_autoshift_status: resolvableValue(z.string()),
    allowed_windows: resolvableValue(z.string().array().optional()),
    blocked_dates: resolvableValue(z.string().array().optional()),
    blocked_windows: resolvableValue(z.string().array().optional()),
    blocking_alarms: resolvableValue(
      z.object({
        alarm_identifier: z.string(),
        type: z.string(),
      }).array().optional(),
    ),
    outcome_alarms: resolvableValue(
      z.object({
        alarm_identifier: z.string(),
        type: z.string(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
  })

export const AwsArczonalshiftZonalAutoshiftConfigurationOutputSchema = z.object(
  {},
)

export const AwsArczonalshiftZonalAutoshiftConfigurationImportSchema = z.object(
  {
    resource_arn: resolvableValue(z.string()),
  },
)

export type AwsArczonalshiftZonalAutoshiftConfigurationInputProps =
  & z.input<typeof AwsArczonalshiftZonalAutoshiftConfigurationInputSchema>
  & z.input<typeof AwsArczonalshiftZonalAutoshiftConfigurationImportSchema>
  & NodeProps

export type AwsArczonalshiftZonalAutoshiftConfigurationOutputProps =
  & z.output<typeof AwsArczonalshiftZonalAutoshiftConfigurationOutputSchema>
  & z.output<typeof AwsArczonalshiftZonalAutoshiftConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/arczonalshift_zonal_autoshift_configuration

export function AwsArczonalshiftZonalAutoshiftConfiguration(
  props: Partial<AwsArczonalshiftZonalAutoshiftConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_arczonalshift_zonal_autoshift_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsArczonalshiftZonalAutoshiftConfigurationInputSchema}
      _outputSchema={AwsArczonalshiftZonalAutoshiftConfigurationOutputSchema}
      _importSchema={AwsArczonalshiftZonalAutoshiftConfigurationImportSchema}
      {...props}
    />
  )
}

export const useAwsArczonalshiftZonalAutoshiftConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsArczonalshiftZonalAutoshiftConfigurationOutputProps>(
    AwsArczonalshiftZonalAutoshiftConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsArczonalshiftZonalAutoshiftConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsArczonalshiftZonalAutoshiftConfigurationOutputProps>(
    AwsArczonalshiftZonalAutoshiftConfiguration,
    idFilter,
    baseNode,
    optional,
  )
