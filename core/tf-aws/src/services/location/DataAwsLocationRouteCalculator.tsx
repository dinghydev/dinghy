import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLocationRouteCalculator } from './AwsLocationRouteCalculator.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/location_route_calculator

export const InputSchema = z.object({
  calculator_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  calculator_arn: z.string().optional(),
  create_time: z.string().optional(),
  data_source: z.string().optional(),
  description: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  update_time: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsLocationRouteCalculator(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLocationRouteCalculator
      _type='aws_location_route_calculator'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLocationRouteCalculator = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsLocationRouteCalculator, node, id)

export const useDataAwsLocationRouteCalculators = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsLocationRouteCalculator, node, id)
