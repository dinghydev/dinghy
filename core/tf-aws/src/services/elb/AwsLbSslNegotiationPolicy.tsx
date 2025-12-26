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

export const InputSchema = z.object({
  lb_port: resolvableValue(z.number()),
  load_balancer: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  attribute: resolvableValue(
    z.object({
      name: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  triggers: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  attribute: z.object({
    name: z.string(),
    value: z.string(),
  }).array().optional().optional(),
  id: z.string().optional(),
  lb_port: z.number().optional(),
  load_balancer: z.string().optional(),
  name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lb_ssl_negotiation_policy

export function AwsLbSslNegotiationPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lb_ssl_negotiation_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLbSslNegotiationPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsLbSslNegotiationPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLbSslNegotiationPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsLbSslNegotiationPolicy,
    idFilter,
    baseNode,
    optional,
  )
