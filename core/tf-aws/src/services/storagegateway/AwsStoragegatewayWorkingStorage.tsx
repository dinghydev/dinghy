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

export const AwsStoragegatewayWorkingStorageInputSchema = TfMetaSchema.extend({
  disk_id: resolvableValue(z.string()),
  gateway_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsStoragegatewayWorkingStorageOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsStoragegatewayWorkingStorageInputProps =
  & z.input<typeof AwsStoragegatewayWorkingStorageInputSchema>
  & NodeProps

export type AwsStoragegatewayWorkingStorageOutputProps =
  & z.output<typeof AwsStoragegatewayWorkingStorageOutputSchema>
  & z.output<typeof AwsStoragegatewayWorkingStorageInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/storagegateway_working_storage

export function AwsStoragegatewayWorkingStorage(
  props: Partial<AwsStoragegatewayWorkingStorageInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_working_storage'
      _category='resource'
      _title={_title}
      _inputSchema={AwsStoragegatewayWorkingStorageInputSchema}
      _outputSchema={AwsStoragegatewayWorkingStorageOutputSchema}
      {...props}
    />
  )
}

export const useAwsStoragegatewayWorkingStorage = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsStoragegatewayWorkingStorageOutputProps>(
    AwsStoragegatewayWorkingStorage,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsStoragegatewayWorkingStorages = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsStoragegatewayWorkingStorageOutputProps>(
    AwsStoragegatewayWorkingStorage,
    idFilter,
    baseNode,
    optional,
  )
