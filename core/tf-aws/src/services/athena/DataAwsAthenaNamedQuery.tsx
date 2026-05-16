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

export const DataAwsAthenaNamedQueryInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  workgroup: resolvableValue(z.string().optional()),
})

export const DataAwsAthenaNamedQueryOutputSchema = z.object({
  database: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  querystring: z.string().optional(),
})

export type DataAwsAthenaNamedQueryInputProps =
  & z.input<typeof DataAwsAthenaNamedQueryInputSchema>
  & NodeProps

export type DataAwsAthenaNamedQueryOutputProps =
  & z.output<typeof DataAwsAthenaNamedQueryOutputSchema>
  & z.output<typeof DataAwsAthenaNamedQueryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/athena_named_query

export function DataAwsAthenaNamedQuery(
  props: Partial<DataAwsAthenaNamedQueryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAthenaNamedQuery
      _type='aws_athena_named_query'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAthenaNamedQueryInputSchema}
      _outputSchema={DataAwsAthenaNamedQueryOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAthenaNamedQuery = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsAthenaNamedQueryOutputProps>(
    DataAwsAthenaNamedQuery,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAthenaNamedQuerys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAthenaNamedQueryOutputProps>(
    DataAwsAthenaNamedQuery,
    idFilter,
    baseNode,
    optional,
  )
