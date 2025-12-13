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

export const InputSchema = z.object({
  db_proxy_name: resolvableValue(z.string()),
  connection_pool_config: resolvableValue(
    z.object({
      connection_borrow_timeout: z.number().optional(),
      init_query: z.string().optional(),
      max_connections_percent: z.number().optional(),
      max_idle_connections_percent: z.number().optional(),
      session_pinning_filters: z.string().array().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/db_proxy_default_target_group

export function AwsDbProxyDefaultTargetGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_proxy_default_target_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDbProxyDefaultTargetGroup = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsDbProxyDefaultTargetGroup, idFilter, baseNode)

export const useAwsDbProxyDefaultTargetGroups = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(AwsDbProxyDefaultTargetGroup, idFilter, baseNode)
