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

export const AwsCleanroomsCollaborationInputSchema = TfMetaSchema.extend({
  creator_display_name: resolvableValue(z.string()),
  creator_member_abilities: resolvableValue(z.string().array()),
  description: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  query_log_status: resolvableValue(z.string()),
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
      status: z.string().optional(),
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
})

export const AwsCleanroomsCollaborationOutputSchema = z.object({
  arn: z.string().optional(),
  create_time: z.string().optional(),
  id: z.string().optional(),
  update_time: z.string().optional(),
})

export const AwsCleanroomsCollaborationImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsCleanroomsCollaborationInputProps =
  & z.input<typeof AwsCleanroomsCollaborationInputSchema>
  & z.input<typeof AwsCleanroomsCollaborationImportSchema>
  & NodeProps

export type AwsCleanroomsCollaborationOutputProps =
  & z.output<typeof AwsCleanroomsCollaborationOutputSchema>
  & z.output<typeof AwsCleanroomsCollaborationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cleanrooms_collaboration

export function AwsCleanroomsCollaboration(
  props: Partial<AwsCleanroomsCollaborationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cleanrooms_collaboration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCleanroomsCollaborationInputSchema}
      _outputSchema={AwsCleanroomsCollaborationOutputSchema}
      _importSchema={AwsCleanroomsCollaborationImportSchema}
      {...props}
    />
  )
}

export const useAwsCleanroomsCollaboration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCleanroomsCollaborationOutputProps>(
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
  useTypedNodes<AwsCleanroomsCollaborationOutputProps>(
    AwsCleanroomsCollaboration,
    idFilter,
    baseNode,
    optional,
  )
