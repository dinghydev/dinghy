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

export const AwsApiGatewayUsagePlanKeyInputSchema = TfMetaSchema.extend({
  key_id: resolvableValue(z.string()),
  key_type: resolvableValue(z.string()),
  usage_plan_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsApiGatewayUsagePlanKeyOutputSchema = z.object({
  id: z.string().optional(),
  key_id: z.string().optional(),
  key_type: z.string().optional(),
  name: z.string().optional(),
  usage_plan_id: z.string().optional(),
  value: z.string().optional(),
})

export type AwsApiGatewayUsagePlanKeyInputProps =
  & z.input<typeof AwsApiGatewayUsagePlanKeyInputSchema>
  & NodeProps

export type AwsApiGatewayUsagePlanKeyOutputProps =
  & z.output<typeof AwsApiGatewayUsagePlanKeyOutputSchema>
  & z.output<typeof AwsApiGatewayUsagePlanKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_usage_plan_key

export function AwsApiGatewayUsagePlanKey(
  props: Partial<AwsApiGatewayUsagePlanKeyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_usage_plan_key'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayUsagePlanKeyInputSchema}
      _outputSchema={AwsApiGatewayUsagePlanKeyOutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayUsagePlanKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayUsagePlanKeyOutputProps>(
    AwsApiGatewayUsagePlanKey,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayUsagePlanKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayUsagePlanKeyOutputProps>(
    AwsApiGatewayUsagePlanKey,
    idFilter,
    baseNode,
    optional,
  )
