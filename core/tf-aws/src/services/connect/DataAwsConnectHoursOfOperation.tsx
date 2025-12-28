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

export const InputSchema = z.object({
  instance_id: resolvableValue(z.string()),
  hours_of_operation_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/connect_hours_of_operation

export function DataAwsConnectHoursOfOperation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsConnectHoursOfOperation
      _type='aws_connect_hours_of_operation'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectHoursOfOperation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsConnectHoursOfOperation,
    idFilter,
    baseNode,
    optional,
  )
