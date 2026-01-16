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

export const InputSchema = TfMetaSchema.extend({
  collaboration_id: resolvableValue(z.string()),
  query_log_status: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  default_result_configuration: resolvableValue(
    z.object({
      role_arn: z.string().optional(),
      output_configuration: z.object({
        s3: z.object({
          bucket: z.string(),
          key_prefix: z.string().optional(),
          result_format: z.string(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  payment_configuration: resolvableValue(
    z.object({
      query_compute: z.object({
        is_responsible: z.boolean(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  collaboration_arn: z.string().optional(),
  collaboration_creator_account_id: z.string().optional(),
  collaboration_creator_display_name: z.string().optional(),
  collaboration_id: z.string().optional(),
  collaboration_name: z.string().optional(),
  create_time: z.string().optional(),
  id: z.string().optional(),
  member_abilities: z.string().array().optional(),
  status: z.string().optional(),
  update_time: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cleanrooms_membership

export function AwsCleanroomsMembership(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cleanrooms_membership'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCleanroomsMembership = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCleanroomsMembership,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCleanroomsMemberships = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCleanroomsMembership,
    idFilter,
    baseNode,
    optional,
  )
