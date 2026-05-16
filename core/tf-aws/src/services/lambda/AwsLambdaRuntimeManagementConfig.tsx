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

export const AwsLambdaRuntimeManagementConfigInputSchema = TfMetaSchema.extend({
  function_name: resolvableValue(z.string()),
  qualifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  runtime_version_arn: resolvableValue(z.string().optional()),
  update_runtime_on: resolvableValue(z.string().optional()),
})

export const AwsLambdaRuntimeManagementConfigOutputSchema = z.object({
  function_arn: z.string().optional(),
})

export type AwsLambdaRuntimeManagementConfigInputProps =
  & z.input<typeof AwsLambdaRuntimeManagementConfigInputSchema>
  & NodeProps

export type AwsLambdaRuntimeManagementConfigOutputProps =
  & z.output<typeof AwsLambdaRuntimeManagementConfigOutputSchema>
  & z.output<typeof AwsLambdaRuntimeManagementConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lambda_runtime_management_config

export function AwsLambdaRuntimeManagementConfig(
  props: Partial<AwsLambdaRuntimeManagementConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_runtime_management_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLambdaRuntimeManagementConfigInputSchema}
      _outputSchema={AwsLambdaRuntimeManagementConfigOutputSchema}
      {...props}
    />
  )
}

export const useAwsLambdaRuntimeManagementConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLambdaRuntimeManagementConfigOutputProps>(
    AwsLambdaRuntimeManagementConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLambdaRuntimeManagementConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLambdaRuntimeManagementConfigOutputProps>(
    AwsLambdaRuntimeManagementConfig,
    idFilter,
    baseNode,
    optional,
  )
