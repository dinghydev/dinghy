import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsApiGatewayDomainName } from './AwsApiGatewayDomainName.tsx'

export const InputSchema = z.object({
  domain_name: resolvableValue(z.string()),
  domain_name_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  certificate_arn: z.string().optional(),
  certificate_name: z.string().optional(),
  certificate_upload_date: z.string().optional(),
  cloudfront_domain_name: z.string().optional(),
  cloudfront_zone_id: z.string().optional(),
  endpoint_configuration: z.object({
    ip_address_type: z.string(),
    types: z.string().array(),
  }).array().optional(),
  policy: z.string().optional(),
  regional_certificate_arn: z.string().optional(),
  regional_certificate_name: z.string().optional(),
  regional_domain_name: z.string().optional(),
  regional_zone_id: z.string().optional(),
  security_policy: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/api_gateway_domain_name

export function DataAwsApiGatewayDomainName(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsApiGatewayDomainName
      _type='aws_api_gateway_domain_name'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsApiGatewayDomainName = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsApiGatewayDomainName,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsApiGatewayDomainNames = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsApiGatewayDomainName,
    idFilter,
    baseNode,
    optional,
  )
