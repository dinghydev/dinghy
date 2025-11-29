import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsPrometheusWorkspace } from './AwsPrometheusWorkspace.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/prometheus_workspace

export const InputSchema = z.object({
  workspace_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  alias: z.string().optional(),
  arn: z.string().optional(),
  created_date: z.string().optional(),
  kms_key_arn: z.string().optional(),
  prometheus_endpoint: z.string().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsPrometheusWorkspace(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsPrometheusWorkspace
      _type='aws_prometheus_workspace'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsPrometheusWorkspace = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsPrometheusWorkspace, node, id)

export const useDataAwsPrometheusWorkspaces = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsPrometheusWorkspace, node, id)
