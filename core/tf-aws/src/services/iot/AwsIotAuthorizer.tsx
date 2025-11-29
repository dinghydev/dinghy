import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iot_authorizer

export const InputSchema = z.object({
  authorizer_function_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  enable_caching_for_http: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  signing_disabled: resolvableValue(z.boolean().optional()),
  status: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  token_key_name: resolvableValue(z.string().optional()),
  token_signing_public_keys: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIotAuthorizer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_authorizer'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIotAuthorizer = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIotAuthorizer, node, id)

export const useAwsIotAuthorizers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIotAuthorizer, node, id)
