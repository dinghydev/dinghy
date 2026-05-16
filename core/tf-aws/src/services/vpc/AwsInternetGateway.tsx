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

export const AwsInternetGatewayInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_id: resolvableValue(z.string().optional()),
})

export const AwsInternetGatewayOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsInternetGatewayImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsInternetGatewayInputProps =
  & z.input<typeof AwsInternetGatewayInputSchema>
  & z.input<typeof AwsInternetGatewayImportSchema>
  & NodeProps

export type AwsInternetGatewayOutputProps =
  & z.output<typeof AwsInternetGatewayOutputSchema>
  & z.output<typeof AwsInternetGatewayInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/internet_gateway

export function AwsInternetGateway(
  props: Partial<AwsInternetGatewayInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_internet_gateway'
      _category='resource'
      _title={_title}
      _inputSchema={AwsInternetGatewayInputSchema}
      _outputSchema={AwsInternetGatewayOutputSchema}
      _importSchema={AwsInternetGatewayImportSchema}
      {...props}
    />
  )
}

export const useAwsInternetGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsInternetGatewayOutputProps>(
    AwsInternetGateway,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsInternetGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsInternetGatewayOutputProps>(
    AwsInternetGateway,
    idFilter,
    baseNode,
    optional,
  )
