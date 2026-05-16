import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLocationRouteCalculator } from './AwsLocationRouteCalculator.tsx'

export const DataAwsLocationRouteCalculatorInputSchema = TfMetaSchema.extend({
  calculator_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsLocationRouteCalculatorOutputSchema = z.object({
  calculator_arn: z.string().optional(),
  create_time: z.string().optional(),
  data_source: z.string().optional(),
  description: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  update_time: z.string().optional(),
})

export type DataAwsLocationRouteCalculatorInputProps =
  & z.input<typeof DataAwsLocationRouteCalculatorInputSchema>
  & NodeProps

export type DataAwsLocationRouteCalculatorOutputProps =
  & z.output<typeof DataAwsLocationRouteCalculatorOutputSchema>
  & z.output<typeof DataAwsLocationRouteCalculatorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/location_route_calculator

export function DataAwsLocationRouteCalculator(
  props: Partial<DataAwsLocationRouteCalculatorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLocationRouteCalculator
      _type='aws_location_route_calculator'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLocationRouteCalculatorInputSchema}
      _outputSchema={DataAwsLocationRouteCalculatorOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLocationRouteCalculator = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsLocationRouteCalculatorOutputProps>(
    DataAwsLocationRouteCalculator,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsLocationRouteCalculators = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLocationRouteCalculatorOutputProps>(
    DataAwsLocationRouteCalculator,
    idFilter,
    baseNode,
    optional,
  )
