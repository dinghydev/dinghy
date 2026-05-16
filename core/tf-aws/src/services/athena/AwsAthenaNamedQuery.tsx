import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsAthenaNamedQueryInputSchema = TfMetaSchema.extend({
  database: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  query: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  workgroup: resolvableValue(z.string().optional()),
})

export const AwsAthenaNamedQueryOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsAthenaNamedQueryInputProps =
  & z.input<typeof AwsAthenaNamedQueryInputSchema>
  & NodeProps

export type AwsAthenaNamedQueryOutputProps =
  & z.output<typeof AwsAthenaNamedQueryOutputSchema>
  & z.output<typeof AwsAthenaNamedQueryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/athena_named_query

export function AwsAthenaNamedQuery(
  props: Partial<AwsAthenaNamedQueryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_athena_named_query'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAthenaNamedQueryInputSchema}
      _outputSchema={AwsAthenaNamedQueryOutputSchema}
      {...props}
    />
  )
}

export const useAwsAthenaNamedQuery = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAthenaNamedQueryOutputProps>(
    AwsAthenaNamedQuery,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAthenaNamedQuerys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAthenaNamedQueryOutputProps>(
    AwsAthenaNamedQuery,
    idFilter,
    baseNode,
    optional,
  )
