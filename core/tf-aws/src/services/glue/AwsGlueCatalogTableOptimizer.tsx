import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_catalog_table_optimizer

export const InputSchema = z.object({
  catalog_id: resolvableValue(z.string()),
  database_name: resolvableValue(z.string()),
  table_name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      enabled: z.boolean(),
      role_arn: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGlueCatalogTableOptimizer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_catalog_table_optimizer'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueCatalogTableOptimizer = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGlueCatalogTableOptimizer, node, id)

export const useAwsGlueCatalogTableOptimizers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGlueCatalogTableOptimizer, node, id)
