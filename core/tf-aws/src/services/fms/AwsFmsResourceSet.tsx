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

export const InputSchema = z.object({
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  region: resolvableValue(z.string().optional()),
  resource_set: resolvableValue(
    z.object({
      description: z.string().optional(),
      id: z.string(),
      last_update_time: z.string(),
      name: z.string(),
      resource_set_status: z.string().optional(),
      resource_type_list: z.string().array().optional(),
      update_token: z.string().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/fms_resource_set

export function AwsFmsResourceSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fms_resource_set'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFmsResourceSet = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsFmsResourceSet, idFilter, baseNode)

export const useAwsFmsResourceSets = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsFmsResourceSet, idFilter, baseNode)
