import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsLambdaFunctionsInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsLambdaFunctionsOutputSchema = z.object({
  function_arns: z.string().array().optional(),
  function_names: z.string().array().optional(),
})

export type DataAwsLambdaFunctionsInputProps =
  & z.input<typeof DataAwsLambdaFunctionsInputSchema>
  & NodeProps

export type DataAwsLambdaFunctionsOutputProps =
  & z.output<typeof DataAwsLambdaFunctionsOutputSchema>
  & z.output<typeof DataAwsLambdaFunctionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/lambda_functions

export function DataAwsLambdaFunctions(
  props: Partial<DataAwsLambdaFunctionsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_functions'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLambdaFunctionsInputSchema}
      _outputSchema={DataAwsLambdaFunctionsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsLambdaFunctionss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLambdaFunctionsOutputProps>(
    DataAwsLambdaFunctions,
    idFilter,
    baseNode,
    optional,
  )
