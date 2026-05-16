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

export const AwsLambdaFunctionEventInvokeConfigInputSchema = TfMetaSchema
  .extend({
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
  })

export const AwsLambdaFunctionEventInvokeConfigOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsLambdaFunctionEventInvokeConfigInputProps =
  & z.input<typeof AwsLambdaFunctionEventInvokeConfigInputSchema>
  & NodeProps

export type AwsLambdaFunctionEventInvokeConfigOutputProps =
  & z.output<typeof AwsLambdaFunctionEventInvokeConfigOutputSchema>
  & z.output<typeof AwsLambdaFunctionEventInvokeConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lambda_function_event_invoke_config

export function AwsLambdaFunctionEventInvokeConfig(
  props: Partial<AwsLambdaFunctionEventInvokeConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_function_event_invoke_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLambdaFunctionEventInvokeConfigInputSchema}
      _outputSchema={AwsLambdaFunctionEventInvokeConfigOutputSchema}
      {...props}
    />
  )
}

export const useAwsLambdaFunctionEventInvokeConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLambdaFunctionEventInvokeConfigOutputProps>(
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
  useTypedNodes<AwsLambdaFunctionEventInvokeConfigOutputProps>(
    AwsLambdaFunctionEventInvokeConfig,
    idFilter,
    baseNode,
    optional,
  )
