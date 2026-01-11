import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpclatticeListener } from './AwsVpclatticeListener.tsx'

export const InputSchema = z.object({
  listener_identifier: resolvableValue(z.string()),
  service_identifier: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  default_action: z.object({
    fixed_response: z.object({
      status_code: z.number(),
    }).array(),
    forward: z.object({
      target_groups: z.object({
        target_group_identifier: z.string(),
        weight: z.number(),
      }).array(),
    }).array(),
  }).array().optional(),
  last_updated_at: z.string().optional(),
  listener_id: z.string().optional(),
  name: z.string().optional(),
  port: z.number().optional(),
  protocol: z.string().optional(),
  service_arn: z.string().optional(),
  service_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/vpclattice_listener

export function DataAwsVpclatticeListener(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsVpclatticeListener
      _type='aws_vpclattice_listener'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpclatticeListener = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsVpclatticeListener,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsVpclatticeListeners = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsVpclatticeListener,
    idFilter,
    baseNode,
    optional,
  )
