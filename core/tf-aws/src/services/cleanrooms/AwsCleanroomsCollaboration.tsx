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

export const InputSchema = z.object({
  creator_display_name: resolvableValue(z.string()),
  creator_member_abilities: resolvableValue(z.string().array()),
  description: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  query_log_status: resolvableValue(z.string()),
  update_time: resolvableValue(z.string()),
  analytics_engine: resolvableValue(z.string().optional()),
  data_encryption_metadata: resolvableValue(
    z.object({
      allow_clear_text: z.boolean(),
      allow_duplicates: z.boolean(),
      allow_joins_on_columns_with_different_names: z.boolean(),
      preserve_nulls: z.boolean(),
    }).optional(),
  ),
  member: resolvableValue(
    z.object({
      account_id: z.string(),
      display_name: z.string(),
      member_abilities: z.string().array(),
      status: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  create_time: z.string().optional(),
  id: z.string().optional(),
})

export const ImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cleanrooms_collaboration

export function AwsCleanroomsCollaboration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cleanrooms_collaboration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCleanroomsCollaboration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCleanroomsCollaboration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCleanroomsCollaborations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCleanroomsCollaboration,
    idFilter,
    baseNode,
    optional,
  )
