import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/storagegateway_tape_pool

export const InputSchema = z.object({
  pool_name: resolvableValue(z.string()),
  storage_class: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  retention_lock_time_in_days: resolvableValue(z.number().optional()),
  retention_lock_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsStoragegatewayTapePool(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_tape_pool'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsStoragegatewayTapePool = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsStoragegatewayTapePool, node, id)

export const useAwsStoragegatewayTapePools = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsStoragegatewayTapePool, node, id)
