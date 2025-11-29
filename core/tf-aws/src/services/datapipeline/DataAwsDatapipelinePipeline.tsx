import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDatapipelinePipeline } from './AwsDatapipelinePipeline.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/datapipeline_pipeline

export const InputSchema = z.object({
  pipeline_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  description: z.string().optional(),
  name: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsDatapipelinePipeline(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsDatapipelinePipeline
      _type='aws_datapipeline_pipeline'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDatapipelinePipeline = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsDatapipelinePipeline, node, id)

export const useDataAwsDatapipelinePipelines = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsDatapipelinePipeline, node, id)
