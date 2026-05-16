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

export const AwsApiGatewayRequestValidatorInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  validate_request_body: resolvableValue(z.boolean().optional()),
  validate_request_parameters: resolvableValue(z.boolean().optional()),
})

export const AwsApiGatewayRequestValidatorOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsApiGatewayRequestValidatorInputProps =
  & z.input<typeof AwsApiGatewayRequestValidatorInputSchema>
  & NodeProps

export type AwsApiGatewayRequestValidatorOutputProps =
  & z.output<typeof AwsApiGatewayRequestValidatorOutputSchema>
  & z.output<typeof AwsApiGatewayRequestValidatorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_request_validator

export function AwsApiGatewayRequestValidator(
  props: Partial<AwsApiGatewayRequestValidatorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_request_validator'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayRequestValidatorInputSchema}
      _outputSchema={AwsApiGatewayRequestValidatorOutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayRequestValidator = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayRequestValidatorOutputProps>(
    AwsApiGatewayRequestValidator,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayRequestValidators = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayRequestValidatorOutputProps>(
    AwsApiGatewayRequestValidator,
    idFilter,
    baseNode,
    optional,
  )
