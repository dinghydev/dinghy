import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOamSink } from './AwsOamSink.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/oam_sink

export const InputSchema = z.object({
  sink_identifier: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  sink_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsOamSink(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsOamSink
      _type='aws_oam_sink'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOamSink = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsOamSink, node, id)

export const useDataAwsOamSinks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsOamSink, node, id)
