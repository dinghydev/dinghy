import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/transfer_access

export const InputSchema = z.object({
  external_id: resolvableValue(z.string()),
  server_id: resolvableValue(z.string()),
  home_directory: resolvableValue(z.string().optional()),
  home_directory_mappings: resolvableValue(
    z.object({
      entry: z.string(),
      target: z.string(),
    }).optional(),
  ),
  home_directory_type: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  policy: resolvableValue(z.string().optional()),
  posix_profile: resolvableValue(
    z.object({
      gid: z.number(),
      secondary_gids: z.number().array().optional(),
      uid: z.number(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  role: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsTransferAccess(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_access'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferAccesss = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsTransferAccess, node, id)
