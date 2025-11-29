import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/datasync_location_object_storage

export const InputSchema = z.object({
  bucket_name: resolvableValue(z.string()),
  server_hostname: resolvableValue(z.string()),
  access_key: resolvableValue(z.string().optional()),
  agent_arns: resolvableValue(z.string().array().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  secret_key: resolvableValue(z.string().optional()),
  server_certificate: resolvableValue(z.string().optional()),
  server_port: resolvableValue(z.number().optional()),
  server_protocol: resolvableValue(z.string().optional()),
  subdirectory: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  uri: z.string().optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDatasyncLocationObjectStorage(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_object_storage'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationObjectStorage = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDatasyncLocationObjectStorage, node, id)

export const useAwsDatasyncLocationObjectStorages = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDatasyncLocationObjectStorage, node, id)
