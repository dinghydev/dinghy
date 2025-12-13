import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAthenaNamedQuery } from './AwsAthenaNamedQuery.tsx'

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  querystring: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  workgroup: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  database: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/athena_named_query

export function DataAwsAthenaNamedQuery(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsAthenaNamedQuery
      _type='aws_athena_named_query'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAthenaNamedQuery = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(DataAwsAthenaNamedQuery, idFilter, baseNode)

export const useDataAwsAthenaNamedQuerys = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(DataAwsAthenaNamedQuery, idFilter, baseNode)
