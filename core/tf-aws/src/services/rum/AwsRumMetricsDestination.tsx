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

export const AwsRumMetricsDestinationInputSchema = TfMetaSchema.extend({
  app_monitor_name: resolvableValue(z.string()),
  destination: resolvableValue(z.string()),
  destination_arn: resolvableValue(z.string().optional()),
  iam_role_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsRumMetricsDestinationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsRumMetricsDestinationInputProps =
  & z.input<typeof AwsRumMetricsDestinationInputSchema>
  & NodeProps

export type AwsRumMetricsDestinationOutputProps =
  & z.output<typeof AwsRumMetricsDestinationOutputSchema>
  & z.output<typeof AwsRumMetricsDestinationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/rum_metrics_destination

export function AwsRumMetricsDestination(
  props: Partial<AwsRumMetricsDestinationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rum_metrics_destination'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRumMetricsDestinationInputSchema}
      _outputSchema={AwsRumMetricsDestinationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRumMetricsDestination = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRumMetricsDestinationOutputProps>(
    AwsRumMetricsDestination,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRumMetricsDestinations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRumMetricsDestinationOutputProps>(
    AwsRumMetricsDestination,
    idFilter,
    baseNode,
    optional,
  )
