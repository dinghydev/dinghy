import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_partition

export const InputSchema = z.object({
  database_name: resolvableValue(z.string()),
  partition_values: resolvableValue(z.string().array()),
  table_name: resolvableValue(z.string()),
  catalog_id: resolvableValue(z.string().optional()),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
  storage_descriptor: resolvableValue(
    z.object({
      additional_locations: z.string().array().optional(),
      bucket_columns: z.string().array().optional(),
      compressed: z.boolean().optional(),
      input_format: z.string().optional(),
      location: z.string().optional(),
      number_of_buckets: z.number().optional(),
      output_format: z.string().optional(),
      parameters: z.record(z.string(), z.string()).optional(),
      stored_as_sub_directories: z.boolean().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  creation_time: z.string().optional(),
  id: z.string().optional(),
  last_accessed_time: z.string().optional(),
  last_analyzed_time: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGluePartition(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_partition'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGluePartition = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGluePartition, node, id)

export const useAwsGluePartitions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGluePartition, node, id)
