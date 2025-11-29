import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lambda_provisioned_concurrency_config

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLambdaProvisionedConcurrencyConfig(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_provisioned_concurrency_config'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLambdaProvisionedConcurrencyConfig = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsLambdaProvisionedConcurrencyConfig, node, id)

export const useAwsLambdaProvisionedConcurrencyConfigs = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsLambdaProvisionedConcurrencyConfig, node, id)
