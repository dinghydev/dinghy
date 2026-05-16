import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLambdaAlias } from './AwsLambdaAlias.tsx'

export const DataAwsLambdaAliasInputSchema = TfMetaSchema.extend({
  function_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsLambdaAliasOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  function_version: z.string().optional(),
  invoke_arn: z.string().optional(),
})

export type DataAwsLambdaAliasInputProps =
  & z.input<typeof DataAwsLambdaAliasInputSchema>
  & NodeProps

export type DataAwsLambdaAliasOutputProps =
  & z.output<typeof DataAwsLambdaAliasOutputSchema>
  & z.output<typeof DataAwsLambdaAliasInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/lambda_alias

export function DataAwsLambdaAlias(
  props: Partial<DataAwsLambdaAliasInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLambdaAlias
      _type='aws_lambda_alias'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLambdaAliasInputSchema}
      _outputSchema={DataAwsLambdaAliasOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLambdaAliass = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLambdaAliasOutputProps>(
    DataAwsLambdaAlias,
    idFilter,
    baseNode,
    optional,
  )
