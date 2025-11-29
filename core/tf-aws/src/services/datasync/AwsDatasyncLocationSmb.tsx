import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/datasync_location_smb

export const InputSchema = z.object({
  agent_arns: resolvableValue(z.string().array()),
  password: resolvableValue(z.string()),
  server_hostname: resolvableValue(z.string()),
  subdirectory: resolvableValue(z.string()),
  uri: resolvableValue(z.string()),
  user: resolvableValue(z.string()),
  domain: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  mount_options: resolvableValue(
    z.object({
      version: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
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

export function AwsDatasyncLocationSmb(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_smb'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationSmb = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDatasyncLocationSmb, node, id)

export const useAwsDatasyncLocationSmbs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDatasyncLocationSmb, node, id)
