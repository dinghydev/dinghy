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

export const InputSchema = TfMetaSchema.extend({
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

export const OutputSchema = z.object({})

export const ImportSchema = z.object({
  resource_arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/arczonalshift_zonal_autoshift_configuration

export function AwsArczonalshiftZonalAutoshiftConfiguration(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsArczonalshiftZonalAutoshiftConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsArczonalshiftZonalAutoshiftConfiguration,
    idFilter,
    baseNode,
    optional,
  )
