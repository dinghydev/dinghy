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

export const AwsRoute53recoverycontrolconfigClusterInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    network_type: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsRoute53recoverycontrolconfigClusterOutputSchema = z.object({
  arn: z.string().optional(),
  cluster_endpoints: z.object({
    endpoint: z.string(),
    region: z.string(),
  }).array().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRoute53recoverycontrolconfigClusterInputProps =
  & z.input<typeof AwsRoute53recoverycontrolconfigClusterInputSchema>
  & NodeProps

export type AwsRoute53recoverycontrolconfigClusterOutputProps =
  & z.output<typeof AwsRoute53recoverycontrolconfigClusterOutputSchema>
  & z.output<typeof AwsRoute53recoverycontrolconfigClusterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53recoverycontrolconfig_cluster

export function AwsRoute53recoverycontrolconfigCluster(
  props: Partial<AwsRoute53recoverycontrolconfigClusterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53recoverycontrolconfig_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53recoverycontrolconfigClusterInputSchema}
      _outputSchema={AwsRoute53recoverycontrolconfigClusterOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53recoverycontrolconfigCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53recoverycontrolconfigClusterOutputProps>(
    AwsRoute53recoverycontrolconfigCluster,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53recoverycontrolconfigClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53recoverycontrolconfigClusterOutputProps>(
    AwsRoute53recoverycontrolconfigCluster,
    idFilter,
    baseNode,
    optional,
  )
