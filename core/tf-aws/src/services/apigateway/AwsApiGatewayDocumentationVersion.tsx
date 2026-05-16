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

export const AwsApiGatewayDocumentationVersionInputSchema = TfMetaSchema.extend(
  {
    rest_api_id: resolvableValue(z.string()),
    version: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsApiGatewayDocumentationVersionOutputSchema = z.object({})

export type AwsApiGatewayDocumentationVersionInputProps =
  & z.input<typeof AwsApiGatewayDocumentationVersionInputSchema>
  & NodeProps

export type AwsApiGatewayDocumentationVersionOutputProps =
  & z.output<typeof AwsApiGatewayDocumentationVersionOutputSchema>
  & z.output<typeof AwsApiGatewayDocumentationVersionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_documentation_version

export function AwsApiGatewayDocumentationVersion(
  props: Partial<AwsApiGatewayDocumentationVersionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_documentation_version'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayDocumentationVersionInputSchema}
      _outputSchema={AwsApiGatewayDocumentationVersionOutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayDocumentationVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayDocumentationVersionOutputProps>(
    AwsApiGatewayDocumentationVersion,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayDocumentationVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayDocumentationVersionOutputProps>(
    AwsApiGatewayDocumentationVersion,
    idFilter,
    baseNode,
    optional,
  )
