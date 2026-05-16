import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsLambdaAliasInputSchema = TfMetaSchema.extend({
  function_name: resolvableValue(z.string()),
  function_version: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  routing_config: resolvableValue(
    z.object({
      additional_version_weights: z.record(z.string(), z.number()).optional(),
    }).optional(),
  ),
})

export const AwsLambdaAliasOutputSchema = z.object({
  arn: z.string().optional(),
  invoke_arn: z.string().optional(),
})

export type AwsLambdaAliasInputProps =
  & z.input<typeof AwsLambdaAliasInputSchema>
  & NodeProps

export type AwsLambdaAliasOutputProps =
  & z.output<typeof AwsLambdaAliasOutputSchema>
  & z.output<typeof AwsLambdaAliasInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lambda_alias

export function AwsLambdaAlias(props: Partial<AwsLambdaAliasInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_alias'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLambdaAliasInputSchema}
      _outputSchema={AwsLambdaAliasOutputSchema}
      {...props}
    />
  )
}

export const useAwsLambdaAliass = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLambdaAliasOutputProps>(
    AwsLambdaAlias,
    idFilter,
    baseNode,
    optional,
  )
