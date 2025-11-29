import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dataexchange_event_action

export const InputSchema = z.object({
  action: resolvableValue(
    z.object({
      export_revision_to_s3: z.object({
        encryption: z.object({
          kms_key_arn: z.string().optional(),
          type: z.string().optional(),
        }).optional(),
        revision_destination: z.object({
          bucket: z.string(),
          key_pattern: z.string().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  event: resolvableValue(
    z.object({
      revision_published: z.object({
        data_set_id: z.string(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  updated_at: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDataexchangeEventAction(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dataexchange_event_action'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDataexchangeEventAction = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDataexchangeEventAction, node, id)

export const useAwsDataexchangeEventActions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDataexchangeEventAction, node, id)
