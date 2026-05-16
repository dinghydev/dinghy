import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsArcregionswitchRoute53HealthChecksInputSchema = TfMetaSchema
  .extend({
    plan_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsArcregionswitchRoute53HealthChecksOutputSchema = z.object({
  health_checks: z.object({
    health_check_id: z.string(),
    hosted_zone_id: z.string(),
    record_name: z.string(),
    region: z.string(),
    status: z.string(),
  }).array().optional(),
  region: z.string().optional(),
})

export type DataAwsArcregionswitchRoute53HealthChecksInputProps =
  & z.input<typeof DataAwsArcregionswitchRoute53HealthChecksInputSchema>
  & NodeProps

export type DataAwsArcregionswitchRoute53HealthChecksOutputProps =
  & z.output<typeof DataAwsArcregionswitchRoute53HealthChecksOutputSchema>
  & z.output<typeof DataAwsArcregionswitchRoute53HealthChecksInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/arcregionswitch_route53_health_checks

export function DataAwsArcregionswitchRoute53HealthChecks(
  props: Partial<DataAwsArcregionswitchRoute53HealthChecksInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_arcregionswitch_route53_health_checks'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsArcregionswitchRoute53HealthChecksInputSchema}
      _outputSchema={DataAwsArcregionswitchRoute53HealthChecksOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsArcregionswitchRoute53HealthCheckss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsArcregionswitchRoute53HealthChecksOutputProps>(
    DataAwsArcregionswitchRoute53HealthChecks,
    idFilter,
    baseNode,
    optional,
  )
