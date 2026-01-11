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
  account_name: resolvableValue(z.string()),
  authentication_method: resolvableValue(z.string()),
  edition: resolvableValue(z.string()),
  notification_email: resolvableValue(z.string()),
  active_directory_name: resolvableValue(z.string().optional()),
  admin_group: resolvableValue(z.string().array().optional()),
  admin_pro_group: resolvableValue(z.string().array().optional()),
  author_group: resolvableValue(z.string().array().optional()),
  author_pro_group: resolvableValue(z.string().array().optional()),
  aws_account_id: resolvableValue(z.string().optional()),
  contact_number: resolvableValue(z.string().optional()),
  directory_id: resolvableValue(z.string().optional()),
  email_address: resolvableValue(z.string().optional()),
  first_name: resolvableValue(z.string().optional()),
  iam_identity_center_instance_arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  last_name: resolvableValue(z.string().optional()),
  reader_group: resolvableValue(z.string().array().optional()),
  reader_pro_group: resolvableValue(z.string().array().optional()),
  realm: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  account_subscription_status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/quicksight_account_subscription

export function AwsQuicksightAccountSubscription(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_account_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightAccountSubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsQuicksightAccountSubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightAccountSubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsQuicksightAccountSubscription,
    idFilter,
    baseNode,
    optional,
  )
