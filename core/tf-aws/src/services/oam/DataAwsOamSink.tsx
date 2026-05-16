import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOamSink } from './AwsOamSink.tsx'

export const DataAwsOamSinkInputSchema = TfMetaSchema.extend({
  sink_identifier: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsOamSinkOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  sink_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsOamSinkInputProps =
  & z.input<typeof DataAwsOamSinkInputSchema>
  & NodeProps

export type DataAwsOamSinkOutputProps =
  & z.output<typeof DataAwsOamSinkOutputSchema>
  & z.output<typeof DataAwsOamSinkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/oam_sink

export function DataAwsOamSink(props: Partial<DataAwsOamSinkInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsOamSink
      _type='aws_oam_sink'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOamSinkInputSchema}
      _outputSchema={DataAwsOamSinkOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOamSink = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOamSinkOutputProps>(
    DataAwsOamSink,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOamSinks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOamSinkOutputProps>(
    DataAwsOamSink,
    idFilter,
    baseNode,
    optional,
  )
