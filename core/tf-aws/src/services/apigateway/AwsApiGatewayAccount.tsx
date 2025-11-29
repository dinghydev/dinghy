import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/api_gateway_account

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  cloudwatch_role_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  api_key_version: z.string().optional(),
  features: z.string().array().optional(),
  throttle_settings: z.object({
    burst_limit: z.number(),
    rate_limit: z.number(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsApiGatewayAccount(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_account'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayAccount = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsApiGatewayAccount, node, id)

export const useAwsApiGatewayAccounts = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsApiGatewayAccount, node, id)
