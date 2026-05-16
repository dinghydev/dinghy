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

export const AwsLambdaProvisionedConcurrencyConfigInputSchema = TfMetaSchema
  .extend({
    function_name: resolvableValue(z.string()),
    provisioned_concurrent_executions: resolvableValue(z.number()),
    qualifier: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    skip_destroy: resolvableValue(z.boolean().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsLambdaProvisionedConcurrencyConfigOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsLambdaProvisionedConcurrencyConfigInputProps =
  & z.input<typeof AwsLambdaProvisionedConcurrencyConfigInputSchema>
  & NodeProps

export type AwsLambdaProvisionedConcurrencyConfigOutputProps =
  & z.output<typeof AwsLambdaProvisionedConcurrencyConfigOutputSchema>
  & z.output<typeof AwsLambdaProvisionedConcurrencyConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lambda_provisioned_concurrency_config

export function AwsLambdaProvisionedConcurrencyConfig(
  props: Partial<AwsLambdaProvisionedConcurrencyConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_provisioned_concurrency_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLambdaProvisionedConcurrencyConfigInputSchema}
      _outputSchema={AwsLambdaProvisionedConcurrencyConfigOutputSchema}
      {...props}
    />
  )
}

export const useAwsLambdaProvisionedConcurrencyConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLambdaProvisionedConcurrencyConfigOutputProps>(
    AwsLambdaProvisionedConcurrencyConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLambdaProvisionedConcurrencyConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLambdaProvisionedConcurrencyConfigOutputProps>(
    AwsLambdaProvisionedConcurrencyConfig,
    idFilter,
    baseNode,
    optional,
  )
