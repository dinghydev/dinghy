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

export const AwsDbProxyDefaultTargetGroupInputSchema = TfMetaSchema.extend({
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
})

export const AwsDbProxyDefaultTargetGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
})

export type AwsDbProxyDefaultTargetGroupInputProps =
  & z.input<typeof AwsDbProxyDefaultTargetGroupInputSchema>
  & NodeProps

export type AwsDbProxyDefaultTargetGroupOutputProps =
  & z.output<typeof AwsDbProxyDefaultTargetGroupOutputSchema>
  & z.output<typeof AwsDbProxyDefaultTargetGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/db_proxy_default_target_group

export function AwsDbProxyDefaultTargetGroup(
  props: Partial<AwsDbProxyDefaultTargetGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_proxy_default_target_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDbProxyDefaultTargetGroupInputSchema}
      _outputSchema={AwsDbProxyDefaultTargetGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsDbProxyDefaultTargetGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDbProxyDefaultTargetGroupOutputProps>(
    AwsDbProxyDefaultTargetGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDbProxyDefaultTargetGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDbProxyDefaultTargetGroupOutputProps>(
    AwsDbProxyDefaultTargetGroup,
    idFilter,
    baseNode,
    optional,
  )
