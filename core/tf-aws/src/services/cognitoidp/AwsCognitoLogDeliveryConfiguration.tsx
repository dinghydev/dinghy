import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cognito_log_delivery_configuration

export const InputSchema = z.object({
  user_pool_id: resolvableValue(z.string()),
  log_configurations: resolvableValue(
    z.object({
      event_source: z.string(),
      log_level: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export const ImportSchema = z.object({
  user_pool_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCognitoLogDeliveryConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_log_delivery_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCognitoLogDeliveryConfiguration = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsCognitoLogDeliveryConfiguration, node, id)

export const useAwsCognitoLogDeliveryConfigurations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsCognitoLogDeliveryConfiguration, node, id)
