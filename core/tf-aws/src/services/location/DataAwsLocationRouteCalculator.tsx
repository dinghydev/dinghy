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

export const InputSchema = TfMetaSchema.extend({
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/location_route_calculator

export function DataAwsLocationRouteCalculator(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsLocationRouteCalculator = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsLocationRouteCalculator,
    idFilter,
    baseNode,
    optional,
  )
