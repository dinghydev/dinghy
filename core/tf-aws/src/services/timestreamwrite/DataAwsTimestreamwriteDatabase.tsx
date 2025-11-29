import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsTimestreamwriteDatabase } from './AwsTimestreamwriteDatabase.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/timestreamwrite_database

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  kms_key_id: z.string().optional(),
  last_updated_time: z.string().optional(),
  table_count: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsTimestreamwriteDatabase(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsTimestreamwriteDatabase
      _type='aws_timestreamwrite_database'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsTimestreamwriteDatabase = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsTimestreamwriteDatabase, node, id)

export const useDataAwsTimestreamwriteDatabases = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsTimestreamwriteDatabase, node, id)
