import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsServicecatalogLaunchPathsInputSchema = TfMetaSchema.extend({
  product_id: resolvableValue(z.string()),
  accept_language: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsServicecatalogLaunchPathsOutputSchema = z.object({
  summaries: z.object({
    constraint_summaries: z.object({
      description: z.string(),
      type: z.string(),
    }).array(),
    name: z.string(),
    path_id: z.string(),
    tags: z.record(z.string(), z.string()),
  }).array().optional(),
})

export type DataAwsServicecatalogLaunchPathsInputProps =
  & z.input<typeof DataAwsServicecatalogLaunchPathsInputSchema>
  & NodeProps

export type DataAwsServicecatalogLaunchPathsOutputProps =
  & z.output<typeof DataAwsServicecatalogLaunchPathsOutputSchema>
  & z.output<typeof DataAwsServicecatalogLaunchPathsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/servicecatalog_launch_paths

export function DataAwsServicecatalogLaunchPaths(
  props: Partial<DataAwsServicecatalogLaunchPathsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_launch_paths'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsServicecatalogLaunchPathsInputSchema}
      _outputSchema={DataAwsServicecatalogLaunchPathsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsServicecatalogLaunchPathss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsServicecatalogLaunchPathsOutputProps>(
    DataAwsServicecatalogLaunchPaths,
    idFilter,
    baseNode,
    optional,
  )
