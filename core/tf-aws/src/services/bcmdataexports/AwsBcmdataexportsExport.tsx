import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bcmdataexports_export

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  export: resolvableValue(
    z.object({
      description: z.string().optional(),
      export_arn: z.string(),
      name: z.string(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
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

export function AwsBcmdataexportsExport(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bcmdataexports_export'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsBcmdataexportsExport = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBcmdataexportsExport, node, id)

export const useAwsBcmdataexportsExports = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBcmdataexportsExport, node, id)
