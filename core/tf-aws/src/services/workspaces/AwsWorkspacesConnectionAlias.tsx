import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsWorkspacesConnectionAliasInputSchema = TfMetaSchema.extend({
  connection_string: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsWorkspacesConnectionAliasOutputSchema = z.object({
  id: z.string().optional(),
  owner_account_id: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsWorkspacesConnectionAliasInputProps =
  & z.input<typeof AwsWorkspacesConnectionAliasInputSchema>
  & NodeProps

export type AwsWorkspacesConnectionAliasOutputProps =
  & z.output<typeof AwsWorkspacesConnectionAliasOutputSchema>
  & z.output<typeof AwsWorkspacesConnectionAliasInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workspaces_connection_alias

export function AwsWorkspacesConnectionAlias(
  props: Partial<AwsWorkspacesConnectionAliasInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspaces_connection_alias'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkspacesConnectionAliasInputSchema}
      _outputSchema={AwsWorkspacesConnectionAliasOutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspacesConnectionAliass = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkspacesConnectionAliasOutputProps>(
    AwsWorkspacesConnectionAlias,
    idFilter,
    baseNode,
    optional,
  )
