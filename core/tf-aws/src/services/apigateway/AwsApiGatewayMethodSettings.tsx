import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsApiGatewayMethodSettingsInputSchema = TfMetaSchema.extend({
  method_path: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  settings: resolvableValue(z.object({
    cache_data_encrypted: z.boolean().optional(),
    cache_ttl_in_seconds: z.number().optional(),
    caching_enabled: z.boolean().optional(),
    data_trace_enabled: z.boolean().optional(),
    logging_level: z.string().optional(),
    metrics_enabled: z.boolean().optional(),
    require_authorization_for_cache_control: z.boolean().optional(),
    throttling_burst_limit: z.number().optional(),
    throttling_rate_limit: z.number().optional(),
    unauthorized_cache_control_header_strategy: z.string().optional(),
  })),
  stage_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsApiGatewayMethodSettingsOutputSchema = z.object({})

export type AwsApiGatewayMethodSettingsInputProps =
  & z.input<typeof AwsApiGatewayMethodSettingsInputSchema>
  & NodeProps

export type AwsApiGatewayMethodSettingsOutputProps =
  & z.output<typeof AwsApiGatewayMethodSettingsOutputSchema>
  & z.output<typeof AwsApiGatewayMethodSettingsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_method_settings

export function AwsApiGatewayMethodSettings(
  props: Partial<AwsApiGatewayMethodSettingsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_method_settings'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayMethodSettingsInputSchema}
      _outputSchema={AwsApiGatewayMethodSettingsOutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayMethodSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayMethodSettingsOutputProps>(
    AwsApiGatewayMethodSettings,
    idFilter,
    baseNode,
    optional,
  )
