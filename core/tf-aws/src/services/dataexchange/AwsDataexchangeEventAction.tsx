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

export const AwsDataexchangeEventActionInputSchema = TfMetaSchema.extend({
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
})

export const AwsDataexchangeEventActionOutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  updated_at: z.string().optional(),
})

export type AwsDataexchangeEventActionInputProps =
  & z.input<typeof AwsDataexchangeEventActionInputSchema>
  & NodeProps

export type AwsDataexchangeEventActionOutputProps =
  & z.output<typeof AwsDataexchangeEventActionOutputSchema>
  & z.output<typeof AwsDataexchangeEventActionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dataexchange_event_action

export function AwsDataexchangeEventAction(
  props: Partial<AwsDataexchangeEventActionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dataexchange_event_action'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDataexchangeEventActionInputSchema}
      _outputSchema={AwsDataexchangeEventActionOutputSchema}
      {...props}
    />
  )
}

export const useAwsDataexchangeEventAction = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDataexchangeEventActionOutputProps>(
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
  useTypedNodes<AwsDataexchangeEventActionOutputProps>(
    AwsDataexchangeEventAction,
    idFilter,
    baseNode,
    optional,
  )
