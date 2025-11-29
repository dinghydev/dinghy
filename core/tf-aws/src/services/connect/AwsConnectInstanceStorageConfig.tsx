import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/connect_instance_storage_config

export const InputSchema = z.object({
  instance_id: resolvableValue(z.string()),
  resource_type: resolvableValue(z.string()),
  storage_config: resolvableValue(z.object({
    storage_type: z.string(),
  })),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  association_id: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsConnectInstanceStorageConfig(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_instance_storage_config'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectInstanceStorageConfig = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsConnectInstanceStorageConfig, node, id)

export const useAwsConnectInstanceStorageConfigs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsConnectInstanceStorageConfig, node, id)
