import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/redshift_scheduled_action

export const InputSchema = z.object({
  iam_role: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  schedule: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  enable: resolvableValue(z.boolean().optional()),
  end_time: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  start_time: resolvableValue(z.string().optional()),
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

export function AwsRedshiftScheduledAction(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsRedshiftScheduledAction = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRedshiftScheduledAction, node, id)

export const useAwsRedshiftScheduledActions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRedshiftScheduledAction, node, id)
