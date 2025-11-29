import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/directory_service_shared_directory

export const InputSchema = z.object({
  directory_id: resolvableValue(z.string()),
  method: resolvableValue(z.string().optional()),
  notes: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  target: resolvableValue(z.object({
    id: z.string(),
    type: z.string().optional(),
  })),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  shared_directory_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDirectoryServiceSharedDirectory(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_directory_service_shared_directory'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDirectoryServiceSharedDirectory = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsDirectoryServiceSharedDirectory, node, id)

export const useAwsDirectoryServiceSharedDirectorys = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsDirectoryServiceSharedDirectory, node, id)
