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
  deletion_protection_enabled: resolvableValue(z.boolean().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  kms_encryption_key: resolvableValue(z.string().optional()),
  multi_region_properties: resolvableValue(
    z.object({
      clusters: z.string().array().optional(),
      witness_region: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  encryption_details: z.object({
    encryption_status: z.string(),
    encryption_type: z.string(),
  }).array().optional(),
  identifier: z.string().optional(),
  multi_region_properties: z.object({
    clusters: z.set(z.string()).optional(),
    witness_region: z.string().optional(),
  }).array().optional().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_endpoint_service_name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dsql_cluster

export function AwsDsqlCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dsql_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDsqlCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsDsqlCluster, idFilter, baseNode, optional)

export const useAwsDsqlClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsDsqlCluster, idFilter, baseNode, optional)
