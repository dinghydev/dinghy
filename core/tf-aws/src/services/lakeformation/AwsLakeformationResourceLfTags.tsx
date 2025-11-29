import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lakeformation_resource_lf_tags

export const InputSchema = z.object({
  catalog_id: resolvableValue(z.string().optional()),
  database: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      name: z.string(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  lf_tag: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      key: z.string(),
      value: z.string(),
    }).array(),
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
      excluded_column_names: z.string().array().optional(),
      name: z.string(),
      wildcard: z.boolean().optional(),
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

export function AwsLakeformationResourceLfTags(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lakeformation_resource_lf_tags'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLakeformationResourceLfTagss = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLakeformationResourceLfTags, node, id)
