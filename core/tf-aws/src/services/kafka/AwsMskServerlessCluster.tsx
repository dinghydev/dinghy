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

export const AwsMskServerlessClusterInputSchema = TfMetaSchema.extend({
  client_authentication: resolvableValue(z.object({
    sasl: z.object({
      iam: z.object({
        enabled: z.boolean(),
      }),
    }),
  })),
  cluster_name: resolvableValue(z.string()),
  vpc_config: resolvableValue(
    z.object({
      security_group_ids: z.string().array().optional(),
      subnet_ids: z.string().array(),
    }).array(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsMskServerlessClusterOutputSchema = z.object({
  arn: z.string().optional(),
  bootstrap_brokers_sasl_iam: z.string().optional(),
  cluster_uuid: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsMskServerlessClusterImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsMskServerlessClusterInputProps =
  & z.input<typeof AwsMskServerlessClusterInputSchema>
  & z.input<typeof AwsMskServerlessClusterImportSchema>
  & NodeProps

export type AwsMskServerlessClusterOutputProps =
  & z.output<typeof AwsMskServerlessClusterOutputSchema>
  & z.output<typeof AwsMskServerlessClusterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_serverless_cluster

export function AwsMskServerlessCluster(
  props: Partial<AwsMskServerlessClusterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_serverless_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMskServerlessClusterInputSchema}
      _outputSchema={AwsMskServerlessClusterOutputSchema}
      _importSchema={AwsMskServerlessClusterImportSchema}
      {...props}
    />
  )
}

export const useAwsMskServerlessCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMskServerlessClusterOutputProps>(
    AwsMskServerlessCluster,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMskServerlessClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMskServerlessClusterOutputProps>(
    AwsMskServerlessCluster,
    idFilter,
    baseNode,
    optional,
  )
