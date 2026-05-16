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

export const AwsFinspaceKxDatabaseInputSchema = TfMetaSchema.extend({
  environment_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsFinspaceKxDatabaseOutputSchema = z.object({
  arn: z.string().optional(),
  created_timestamp: z.string().optional(),
  id: z.string().optional(),
  last_modified_timestamp: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsFinspaceKxDatabaseInputProps =
  & z.input<typeof AwsFinspaceKxDatabaseInputSchema>
  & NodeProps

export type AwsFinspaceKxDatabaseOutputProps =
  & z.output<typeof AwsFinspaceKxDatabaseOutputSchema>
  & z.output<typeof AwsFinspaceKxDatabaseInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/finspace_kx_database

export function AwsFinspaceKxDatabase(
  props: Partial<AwsFinspaceKxDatabaseInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_finspace_kx_database'
      _category='resource'
      _title={_title}
      _inputSchema={AwsFinspaceKxDatabaseInputSchema}
      _outputSchema={AwsFinspaceKxDatabaseOutputSchema}
      {...props}
    />
  )
}

export const useAwsFinspaceKxDatabase = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsFinspaceKxDatabaseOutputProps>(
    AwsFinspaceKxDatabase,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsFinspaceKxDatabases = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsFinspaceKxDatabaseOutputProps>(
    AwsFinspaceKxDatabase,
    idFilter,
    baseNode,
    optional,
  )
