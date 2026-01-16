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
  iam_role: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  schedule: resolvableValue(z.string()),
  target_action: resolvableValue(z.object({
    pause_cluster: z.object({
      cluster_identifier: z.string(),
    }).optional(),
    resize_cluster: z.object({
      classic: z.boolean().optional(),
      cluster_identifier: z.string(),
      cluster_type: z.string().optional(),
      node_type: z.string().optional(),
      number_of_nodes: z.number().optional(),
    }).optional(),
    resume_cluster: z.object({
      cluster_identifier: z.string(),
    }).optional(),
  })),
  description: resolvableValue(z.string().optional()),
  enable: resolvableValue(z.boolean().optional()),
  end_time: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  start_time: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/redshift_scheduled_action

export function AwsRedshiftScheduledAction(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_scheduled_action'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftScheduledAction = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsRedshiftScheduledAction,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftScheduledActions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsRedshiftScheduledAction,
    idFilter,
    baseNode,
    optional,
  )
