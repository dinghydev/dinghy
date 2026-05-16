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

export const AwsGlueCatalogTableOptimizerInputSchema = TfMetaSchema.extend({
  catalog_id: resolvableValue(z.string()),
  database_name: resolvableValue(z.string()),
  table_name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      enabled: z.boolean(),
      role_arn: z.string(),
      orphan_file_deletion_configuration: z.object({
        iceberg_configuration: z.object({
          location: z.string().optional(),
          orphan_file_retention_period_in_days: z.number().optional(),
          run_rate_in_hours: z.number().optional(),
        }).array().optional(),
      }).array().optional(),
      retention_configuration: z.object({
        iceberg_configuration: z.object({
          clean_expired_files: z.boolean().optional(),
          number_of_snapshots_to_retain: z.number().optional(),
          run_rate_in_hours: z.number().optional(),
          snapshot_retention_period_in_days: z.number().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const AwsGlueCatalogTableOptimizerOutputSchema = z.object({})

export type AwsGlueCatalogTableOptimizerInputProps =
  & z.input<typeof AwsGlueCatalogTableOptimizerInputSchema>
  & NodeProps

export type AwsGlueCatalogTableOptimizerOutputProps =
  & z.output<typeof AwsGlueCatalogTableOptimizerOutputSchema>
  & z.output<typeof AwsGlueCatalogTableOptimizerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/glue_catalog_table_optimizer

export function AwsGlueCatalogTableOptimizer(
  props: Partial<AwsGlueCatalogTableOptimizerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_catalog_table_optimizer'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlueCatalogTableOptimizerInputSchema}
      _outputSchema={AwsGlueCatalogTableOptimizerOutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueCatalogTableOptimizer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGlueCatalogTableOptimizerOutputProps>(
    AwsGlueCatalogTableOptimizer,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlueCatalogTableOptimizers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlueCatalogTableOptimizerOutputProps>(
    AwsGlueCatalogTableOptimizer,
    idFilter,
    baseNode,
    optional,
  )
