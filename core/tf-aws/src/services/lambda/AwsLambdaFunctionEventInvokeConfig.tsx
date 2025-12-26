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
  function_name: resolvableValue(z.string()),
  destination_config: resolvableValue(
    z.object({
      on_failure: z.object({
        destination: z.string(),
      }).optional(),
      on_success: z.object({
        destination: z.string(),
      }).optional(),
    }).optional(),
  ),
  maximum_event_age_in_seconds: resolvableValue(z.number().optional()),
  maximum_retry_attempts: resolvableValue(z.number().optional()),
  qualifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lambda_function_event_invoke_config

export function AwsLambdaFunctionEventInvokeConfig(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_function_event_invoke_config'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLambdaFunctionEventInvokeConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsLambdaFunctionEventInvokeConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLambdaFunctionEventInvokeConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsLambdaFunctionEventInvokeConfig,
    idFilter,
    baseNode,
    optional,
  )
