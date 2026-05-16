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

export const AwsStoragegatewayTapePoolInputSchema = TfMetaSchema.extend({
  pool_name: resolvableValue(z.string()),
  storage_class: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  retention_lock_time_in_days: resolvableValue(z.number().optional()),
  retention_lock_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsStoragegatewayTapePoolOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsStoragegatewayTapePoolInputProps =
  & z.input<typeof AwsStoragegatewayTapePoolInputSchema>
  & NodeProps

export type AwsStoragegatewayTapePoolOutputProps =
  & z.output<typeof AwsStoragegatewayTapePoolOutputSchema>
  & z.output<typeof AwsStoragegatewayTapePoolInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/storagegateway_tape_pool

export function AwsStoragegatewayTapePool(
  props: Partial<AwsStoragegatewayTapePoolInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_tape_pool'
      _category='resource'
      _title={_title}
      _inputSchema={AwsStoragegatewayTapePoolInputSchema}
      _outputSchema={AwsStoragegatewayTapePoolOutputSchema}
      {...props}
    />
  )
}

export const useAwsStoragegatewayTapePool = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsStoragegatewayTapePoolOutputProps>(
    AwsStoragegatewayTapePool,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsStoragegatewayTapePools = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsStoragegatewayTapePoolOutputProps>(
    AwsStoragegatewayTapePool,
    idFilter,
    baseNode,
    optional,
  )
