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
  action: resolvableValue(
    z.object({
      export_revision_to_s3: z.object({
        encryption: z.object({
          kms_key_arn: z.string().optional(),
          type: z.string().optional(),
        }).array().optional(),
        revision_destination: z.object({
          bucket: z.string(),
          key_pattern: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  event: resolvableValue(
    z.object({
      revision_published: z.object({
        data_set_id: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dataexchange_event_action

export function AwsDataexchangeEventAction(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsDataexchangeEventAction = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsDataexchangeEventAction,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDataexchangeEventActions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDataexchangeEventAction,
    idFilter,
    baseNode,
    optional,
  )
