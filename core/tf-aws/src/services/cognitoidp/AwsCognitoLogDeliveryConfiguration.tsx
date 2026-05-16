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

export const AwsCognitoLogDeliveryConfigurationInputSchema = TfMetaSchema
  .extend({
    user_pool_id: resolvableValue(z.string()),
    log_configurations: resolvableValue(
      z.object({
        event_source: z.string(),
        log_level: z.string(),
        cloud_watch_logs_configuration: z.object({
          log_group_arn: z.string().optional(),
        }).array().optional(),
        firehose_configuration: z.object({
          stream_arn: z.string().optional(),
        }).array().optional(),
        s3_configuration: z.object({
          bucket_arn: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
  })

export const AwsCognitoLogDeliveryConfigurationOutputSchema = z.object({})

export const AwsCognitoLogDeliveryConfigurationImportSchema = z.object({
  user_pool_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsCognitoLogDeliveryConfigurationInputProps =
  & z.input<typeof AwsCognitoLogDeliveryConfigurationInputSchema>
  & z.input<typeof AwsCognitoLogDeliveryConfigurationImportSchema>
  & NodeProps

export type AwsCognitoLogDeliveryConfigurationOutputProps =
  & z.output<typeof AwsCognitoLogDeliveryConfigurationOutputSchema>
  & z.output<typeof AwsCognitoLogDeliveryConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cognito_log_delivery_configuration

export function AwsCognitoLogDeliveryConfiguration(
  props: Partial<AwsCognitoLogDeliveryConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_log_delivery_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCognitoLogDeliveryConfigurationInputSchema}
      _outputSchema={AwsCognitoLogDeliveryConfigurationOutputSchema}
      _importSchema={AwsCognitoLogDeliveryConfigurationImportSchema}
      {...props}
    />
  )
}

export const useAwsCognitoLogDeliveryConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCognitoLogDeliveryConfigurationOutputProps>(
    AwsCognitoLogDeliveryConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCognitoLogDeliveryConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCognitoLogDeliveryConfigurationOutputProps>(
    AwsCognitoLogDeliveryConfiguration,
    idFilter,
    baseNode,
    optional,
  )
