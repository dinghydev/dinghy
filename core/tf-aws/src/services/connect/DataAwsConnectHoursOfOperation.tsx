import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectHoursOfOperation } from './AwsConnectHoursOfOperation.tsx'

export const DataAwsConnectHoursOfOperationInputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  hours_of_operation_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsConnectHoursOfOperationOutputSchema = z.object({
  arn: z.string().optional(),
  config: z.set(z.object({
    day: z.string(),
    end_time: z.object({
      hours: z.number(),
      minutes: z.number(),
    }).array(),
    start_time: z.object({
      hours: z.number(),
      minutes: z.number(),
    }).array(),
  })).optional(),
  description: z.string().optional(),
  hours_of_operation_id: z.string().optional(),
  instance_id: z.string().optional(),
  name: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  time_zone: z.string().optional(),
})

export type DataAwsConnectHoursOfOperationInputProps =
  & z.input<typeof DataAwsConnectHoursOfOperationInputSchema>
  & NodeProps

export type DataAwsConnectHoursOfOperationOutputProps =
  & z.output<typeof DataAwsConnectHoursOfOperationOutputSchema>
  & z.output<typeof DataAwsConnectHoursOfOperationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/connect_hours_of_operation

export function DataAwsConnectHoursOfOperation(
  props: Partial<DataAwsConnectHoursOfOperationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsConnectHoursOfOperation
      _type='aws_connect_hours_of_operation'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsConnectHoursOfOperationInputSchema}
      _outputSchema={DataAwsConnectHoursOfOperationOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectHoursOfOperation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsConnectHoursOfOperationOutputProps>(
    DataAwsConnectHoursOfOperation,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsConnectHoursOfOperations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsConnectHoursOfOperationOutputProps>(
    DataAwsConnectHoursOfOperation,
    idFilter,
    baseNode,
    optional,
  )
