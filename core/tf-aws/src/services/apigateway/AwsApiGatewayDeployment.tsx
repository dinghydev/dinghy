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

export const AwsApiGatewayDeploymentInputSchema = TfMetaSchema.extend({
  rest_api_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  triggers: resolvableValue(z.record(z.string(), z.string()).optional()),
  variables: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsApiGatewayDeploymentOutputSchema = z.object({
  created_date: z.string().optional(),
  id: z.string().optional(),
})

export type AwsApiGatewayDeploymentInputProps =
  & z.input<typeof AwsApiGatewayDeploymentInputSchema>
  & NodeProps

export type AwsApiGatewayDeploymentOutputProps =
  & z.output<typeof AwsApiGatewayDeploymentOutputSchema>
  & z.output<typeof AwsApiGatewayDeploymentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_deployment

export function AwsApiGatewayDeployment(
  props: Partial<AwsApiGatewayDeploymentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_deployment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayDeploymentInputSchema}
      _outputSchema={AwsApiGatewayDeploymentOutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayDeployment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayDeploymentOutputProps>(
    AwsApiGatewayDeployment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayDeployments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayDeploymentOutputProps>(
    AwsApiGatewayDeployment,
    idFilter,
    baseNode,
    optional,
  )
