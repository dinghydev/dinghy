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
  auto_update: resolvableValue(z.boolean()),
  az_mode: resolvableValue(z.string()),
  database_name: resolvableValue(z.string()),
  environment_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  status: resolvableValue(z.string()),
  availability_zone_id: resolvableValue(z.string().optional()),
  changeset_id: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  read_write: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  segment_configurations: resolvableValue(
    z.object({
      db_paths: z.string().array(),
      on_demand: z.boolean().optional(),
      volume_name: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_timestamp: z.string().optional(),
  id: z.string().optional(),
  last_modified_timestamp: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/finspace_kx_dataview

export function AwsFinspaceKxDataview(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_finspace_kx_dataview'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFinspaceKxDataview = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsFinspaceKxDataview, idFilter, baseNode, optional)

export const useAwsFinspaceKxDataviews = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsFinspaceKxDataview,
    idFilter,
    baseNode,
    optional,
  )
