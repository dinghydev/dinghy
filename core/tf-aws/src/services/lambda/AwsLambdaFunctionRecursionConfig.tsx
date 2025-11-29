import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lambda_function_recursion_config

export const InputSchema = z.object({
  function_name: resolvableValue(z.string()),
  recursive_loop: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLambdaFunctionRecursionConfig(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_function_recursion_config'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLambdaFunctionRecursionConfig = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLambdaFunctionRecursionConfig, node, id)

export const useAwsLambdaFunctionRecursionConfigs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLambdaFunctionRecursionConfig, node, id)
