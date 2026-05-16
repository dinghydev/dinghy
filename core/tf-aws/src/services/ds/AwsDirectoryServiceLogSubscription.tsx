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

export const AwsDirectoryServiceLogSubscriptionInputSchema = TfMetaSchema
  .extend({
    directory_id: resolvableValue(z.string()),
    log_group_name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsDirectoryServiceLogSubscriptionOutputSchema = z.object({})

export type AwsDirectoryServiceLogSubscriptionInputProps =
  & z.input<typeof AwsDirectoryServiceLogSubscriptionInputSchema>
  & NodeProps

export type AwsDirectoryServiceLogSubscriptionOutputProps =
  & z.output<typeof AwsDirectoryServiceLogSubscriptionOutputSchema>
  & z.output<typeof AwsDirectoryServiceLogSubscriptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/directory_service_log_subscription

export function AwsDirectoryServiceLogSubscription(
  props: Partial<AwsDirectoryServiceLogSubscriptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_directory_service_log_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDirectoryServiceLogSubscriptionInputSchema}
      _outputSchema={AwsDirectoryServiceLogSubscriptionOutputSchema}
      {...props}
    />
  )
}

export const useAwsDirectoryServiceLogSubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDirectoryServiceLogSubscriptionOutputProps>(
    AwsDirectoryServiceLogSubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDirectoryServiceLogSubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDirectoryServiceLogSubscriptionOutputProps>(
    AwsDirectoryServiceLogSubscription,
    idFilter,
    baseNode,
    optional,
  )
