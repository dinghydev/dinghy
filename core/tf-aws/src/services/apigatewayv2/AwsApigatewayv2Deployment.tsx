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

export const AwsApigatewayv2DeploymentInputSchema = TfMetaSchema.extend({
  api_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  triggers: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsApigatewayv2DeploymentOutputSchema = z.object({
  auto_deployed: z.boolean().optional(),
  id: z.string().optional(),
})

export type AwsApigatewayv2DeploymentInputProps =
  & z.input<typeof AwsApigatewayv2DeploymentInputSchema>
  & NodeProps

export type AwsApigatewayv2DeploymentOutputProps =
  & z.output<typeof AwsApigatewayv2DeploymentOutputSchema>
  & z.output<typeof AwsApigatewayv2DeploymentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apigatewayv2_deployment

export function AwsApigatewayv2Deployment(
  props: Partial<AwsApigatewayv2DeploymentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_deployment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApigatewayv2DeploymentInputSchema}
      _outputSchema={AwsApigatewayv2DeploymentOutputSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2Deployment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApigatewayv2DeploymentOutputProps>(
    AwsApigatewayv2Deployment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApigatewayv2Deployments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApigatewayv2DeploymentOutputProps>(
    AwsApigatewayv2Deployment,
    idFilter,
    baseNode,
    optional,
  )
