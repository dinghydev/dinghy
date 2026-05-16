import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLambdaInvocation } from './AwsLambdaInvocation.tsx'

export const DataAwsLambdaInvocationInputSchema = TfMetaSchema.extend({
  function_name: resolvableValue(z.string()),
  input: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  qualifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tenant_id: resolvableValue(z.string().optional()),
})

export const DataAwsLambdaInvocationOutputSchema = z.object({
  result: z.string().optional(),
})

export type DataAwsLambdaInvocationInputProps =
  & z.input<typeof DataAwsLambdaInvocationInputSchema>
  & NodeProps

export type DataAwsLambdaInvocationOutputProps =
  & z.output<typeof DataAwsLambdaInvocationOutputSchema>
  & z.output<typeof DataAwsLambdaInvocationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/lambda_invocation

export function DataAwsLambdaInvocation(
  props: Partial<DataAwsLambdaInvocationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLambdaInvocation
      _type='aws_lambda_invocation'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLambdaInvocationInputSchema}
      _outputSchema={DataAwsLambdaInvocationOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLambdaInvocation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsLambdaInvocationOutputProps>(
    DataAwsLambdaInvocation,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsLambdaInvocations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLambdaInvocationOutputProps>(
    DataAwsLambdaInvocation,
    idFilter,
    baseNode,
    optional,
  )
