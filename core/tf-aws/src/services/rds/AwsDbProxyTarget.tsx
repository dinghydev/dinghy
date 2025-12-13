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
  target_group_name: resolvableValue(z.string()),
  db_cluster_identifier: resolvableValue(z.string().optional()),
  db_instance_identifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  endpoint: z.string().optional(),
  id: z.string().optional(),
  port: z.number().optional(),
  rds_resource_id: z.string().optional(),
  target_arn: z.string().optional(),
  tracked_cluster_id: z.string().optional(),
  type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/db_proxy_target

export function AwsDbProxyTarget(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_proxy_target'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDbProxyTarget = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsDbProxyTarget, idFilter, baseNode)

export const useAwsDbProxyTargets = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsDbProxyTarget, idFilter, baseNode)
