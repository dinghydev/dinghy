import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lakeformation_resource_lf_tag

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  catalog_id: resolvableValue(z.string().optional()),
  database: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      name: z.string(),
    }).optional(),
  ),
  lf_tag: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      key: z.string(),
      value: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  table: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      database_name: z.string(),
      name: z.string().optional(),
      wildcard: z.boolean().optional(),
    }).optional(),
  ),
  table_with_columns: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      column_names: z.string().array().optional(),
      database_name: z.string(),
      name: z.string(),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLakeformationResourceLfTag(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lakeformation_resource_lf_tag'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLakeformationResourceLfTag = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLakeformationResourceLfTag, node, id)

export const useAwsLakeformationResourceLfTags = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLakeformationResourceLfTag, node, id)
