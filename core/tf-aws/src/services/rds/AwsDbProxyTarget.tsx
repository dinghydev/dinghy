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

export const AwsDbProxyTargetInputSchema = TfMetaSchema.extend({
  db_proxy_name: resolvableValue(z.string()),
  target_group_name: resolvableValue(z.string()),
  db_cluster_identifier: resolvableValue(z.string().optional()),
  db_instance_identifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsDbProxyTargetOutputSchema = z.object({
  endpoint: z.string().optional(),
  id: z.string().optional(),
  port: z.number().optional(),
  rds_resource_id: z.string().optional(),
  target_arn: z.string().optional(),
  tracked_cluster_id: z.string().optional(),
  type: z.string().optional(),
})

export type AwsDbProxyTargetInputProps =
  & z.input<typeof AwsDbProxyTargetInputSchema>
  & NodeProps

export type AwsDbProxyTargetOutputProps =
  & z.output<typeof AwsDbProxyTargetOutputSchema>
  & z.output<typeof AwsDbProxyTargetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/db_proxy_target

export function AwsDbProxyTarget(props: Partial<AwsDbProxyTargetInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_proxy_target'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDbProxyTargetInputSchema}
      _outputSchema={AwsDbProxyTargetOutputSchema}
      {...props}
    />
  )
}

export const useAwsDbProxyTarget = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDbProxyTargetOutputProps>(
    AwsDbProxyTarget,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDbProxyTargets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDbProxyTargetOutputProps>(
    AwsDbProxyTarget,
    idFilter,
    baseNode,
    optional,
  )
