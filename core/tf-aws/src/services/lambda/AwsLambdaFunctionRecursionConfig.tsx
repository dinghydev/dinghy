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

export const AwsLambdaFunctionRecursionConfigInputSchema = TfMetaSchema.extend({
  function_name: resolvableValue(z.string()),
  recursive_loop: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsLambdaFunctionRecursionConfigOutputSchema = z.object({})

export type AwsLambdaFunctionRecursionConfigInputProps =
  & z.input<typeof AwsLambdaFunctionRecursionConfigInputSchema>
  & NodeProps

export type AwsLambdaFunctionRecursionConfigOutputProps =
  & z.output<typeof AwsLambdaFunctionRecursionConfigOutputSchema>
  & z.output<typeof AwsLambdaFunctionRecursionConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lambda_function_recursion_config

export function AwsLambdaFunctionRecursionConfig(
  props: Partial<AwsLambdaFunctionRecursionConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_function_recursion_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLambdaFunctionRecursionConfigInputSchema}
      _outputSchema={AwsLambdaFunctionRecursionConfigOutputSchema}
      {...props}
    />
  )
}

export const useAwsLambdaFunctionRecursionConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLambdaFunctionRecursionConfigOutputProps>(
    AwsLambdaFunctionRecursionConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLambdaFunctionRecursionConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLambdaFunctionRecursionConfigOutputProps>(
    AwsLambdaFunctionRecursionConfig,
    idFilter,
    baseNode,
    optional,
  )
