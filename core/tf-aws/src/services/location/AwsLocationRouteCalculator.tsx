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

export const AwsLocationRouteCalculatorInputSchema = TfMetaSchema.extend({
  calculator_name: resolvableValue(z.string()),
  data_source: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsLocationRouteCalculatorOutputSchema = z.object({
  calculator_arn: z.string().optional(),
  create_time: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  update_time: z.string().optional(),
})

export type AwsLocationRouteCalculatorInputProps =
  & z.input<typeof AwsLocationRouteCalculatorInputSchema>
  & NodeProps

export type AwsLocationRouteCalculatorOutputProps =
  & z.output<typeof AwsLocationRouteCalculatorOutputSchema>
  & z.output<typeof AwsLocationRouteCalculatorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/location_route_calculator

export function AwsLocationRouteCalculator(
  props: Partial<AwsLocationRouteCalculatorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_location_route_calculator'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLocationRouteCalculatorInputSchema}
      _outputSchema={AwsLocationRouteCalculatorOutputSchema}
      {...props}
    />
  )
}

export const useAwsLocationRouteCalculator = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLocationRouteCalculatorOutputProps>(
    AwsLocationRouteCalculator,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLocationRouteCalculators = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLocationRouteCalculatorOutputProps>(
    AwsLocationRouteCalculator,
    idFilter,
    baseNode,
    optional,
  )
