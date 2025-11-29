import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lambda_invocation

export const InputSchema = z.object({
  function_name: resolvableValue(z.string()),
  input: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  lifecycle_scope: resolvableValue(z.string().optional()),
  qualifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  terraform_key: resolvableValue(z.string().optional()),
  triggers: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  result: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLambdaInvocation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_invocation'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLambdaInvocation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLambdaInvocation, node, id)

export const useAwsLambdaInvocations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLambdaInvocation, node, id)
