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

export const AwsLambdaInvocationInputSchema = TfMetaSchema.extend({
  function_name: resolvableValue(z.string()),
  input: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  lifecycle_scope: resolvableValue(z.string().optional()),
  qualifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tenant_id: resolvableValue(z.string().optional()),
  terraform_key: resolvableValue(z.string().optional()),
  triggers: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsLambdaInvocationOutputSchema = z.object({
  result: z.string().optional(),
})

export type AwsLambdaInvocationInputProps =
  & z.input<typeof AwsLambdaInvocationInputSchema>
  & NodeProps

export type AwsLambdaInvocationOutputProps =
  & z.output<typeof AwsLambdaInvocationOutputSchema>
  & z.output<typeof AwsLambdaInvocationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lambda_invocation

export function AwsLambdaInvocation(
  props: Partial<AwsLambdaInvocationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_invocation'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLambdaInvocationInputSchema}
      _outputSchema={AwsLambdaInvocationOutputSchema}
      {...props}
    />
  )
}

export const useAwsLambdaInvocation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLambdaInvocationOutputProps>(
    AwsLambdaInvocation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLambdaInvocations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLambdaInvocationOutputProps>(
    AwsLambdaInvocation,
    idFilter,
    baseNode,
    optional,
  )
