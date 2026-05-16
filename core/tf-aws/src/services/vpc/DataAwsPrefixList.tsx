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

export const DataAwsPrefixListInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  name: resolvableValue(z.string().optional()),
  prefix_list_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsPrefixListOutputSchema = z.object({
  cidr_blocks: z.string().array().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
})

export type DataAwsPrefixListInputProps =
  & z.input<typeof DataAwsPrefixListInputSchema>
  & NodeProps

export type DataAwsPrefixListOutputProps =
  & z.output<typeof DataAwsPrefixListOutputSchema>
  & z.output<typeof DataAwsPrefixListInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/prefix_list

export function DataAwsPrefixList(props: Partial<DataAwsPrefixListInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_prefix_list'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsPrefixListInputSchema}
      _outputSchema={DataAwsPrefixListOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsPrefixList = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsPrefixListOutputProps>(
    DataAwsPrefixList,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsPrefixLists = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsPrefixListOutputProps>(
    DataAwsPrefixList,
    idFilter,
    baseNode,
    optional,
  )
