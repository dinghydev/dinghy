import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsPrometheusWorkspacesInputSchema = TfMetaSchema.extend({
  alias_prefix: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsPrometheusWorkspacesOutputSchema = z.object({
  aliases: z.string().array().optional(),
  arns: z.string().array().optional(),
  workspace_ids: z.string().array().optional(),
})

export type DataAwsPrometheusWorkspacesInputProps =
  & z.input<typeof DataAwsPrometheusWorkspacesInputSchema>
  & NodeProps

export type DataAwsPrometheusWorkspacesOutputProps =
  & z.output<typeof DataAwsPrometheusWorkspacesOutputSchema>
  & z.output<typeof DataAwsPrometheusWorkspacesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/prometheus_workspaces

export function DataAwsPrometheusWorkspaces(
  props: Partial<DataAwsPrometheusWorkspacesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_prometheus_workspaces'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsPrometheusWorkspacesInputSchema}
      _outputSchema={DataAwsPrometheusWorkspacesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsPrometheusWorkspacess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsPrometheusWorkspacesOutputProps>(
    DataAwsPrometheusWorkspaces,
    idFilter,
    baseNode,
    optional,
  )
