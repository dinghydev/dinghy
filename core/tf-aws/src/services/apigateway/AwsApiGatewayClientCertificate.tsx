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

export const AwsApiGatewayClientCertificateInputSchema = TfMetaSchema.extend({
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsApiGatewayClientCertificateOutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  expiration_date: z.string().optional(),
  id: z.string().optional(),
  pem_encoded_certificate: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsApiGatewayClientCertificateInputProps =
  & z.input<typeof AwsApiGatewayClientCertificateInputSchema>
  & NodeProps

export type AwsApiGatewayClientCertificateOutputProps =
  & z.output<typeof AwsApiGatewayClientCertificateOutputSchema>
  & z.output<typeof AwsApiGatewayClientCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_client_certificate

export function AwsApiGatewayClientCertificate(
  props: Partial<AwsApiGatewayClientCertificateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_client_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayClientCertificateInputSchema}
      _outputSchema={AwsApiGatewayClientCertificateOutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayClientCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayClientCertificateOutputProps>(
    AwsApiGatewayClientCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayClientCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayClientCertificateOutputProps>(
    AwsApiGatewayClientCertificate,
    idFilter,
    baseNode,
    optional,
  )
