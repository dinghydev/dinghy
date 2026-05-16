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

export const AwsPrometheusWorkspaceInputSchema = TfMetaSchema.extend({
  alias: resolvableValue(z.string().optional()),
  kms_key_arn: resolvableValue(z.string().optional()),
  logging_configuration: resolvableValue(
    z.object({
      log_group_arn: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsPrometheusWorkspaceOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  prometheus_endpoint: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsPrometheusWorkspaceInputProps =
  & z.input<typeof AwsPrometheusWorkspaceInputSchema>
  & NodeProps

export type AwsPrometheusWorkspaceOutputProps =
  & z.output<typeof AwsPrometheusWorkspaceOutputSchema>
  & z.output<typeof AwsPrometheusWorkspaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_workspace

export function AwsPrometheusWorkspace(
  props: Partial<AwsPrometheusWorkspaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_prometheus_workspace'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPrometheusWorkspaceInputSchema}
      _outputSchema={AwsPrometheusWorkspaceOutputSchema}
      {...props}
    />
  )
}

export const useAwsPrometheusWorkspace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPrometheusWorkspaceOutputProps>(
    AwsPrometheusWorkspace,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPrometheusWorkspaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPrometheusWorkspaceOutputProps>(
    AwsPrometheusWorkspace,
    idFilter,
    baseNode,
    optional,
  )
