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
  attached_clusters: resolvableValue(
    z.object({
      cluster_name: z.string(),
      cluster_status: z.string(),
      cluster_type: z.string(),
    }).array(),
  ),
  availability_zones: resolvableValue(z.string().array()),
  az_mode: resolvableValue(z.string()),
  environment_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  nas1_configuration: resolvableValue(
    z.object({
      size: z.number(),
      type: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
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
  created_timestamp: z.string().optional(),
  last_modified_timestamp: z.string().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/finspace_kx_volume

export function AwsFinspaceKxVolume(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_finspace_kx_volume'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFinspaceKxVolume = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsFinspaceKxVolume, idFilter, baseNode, optional)

export const useAwsFinspaceKxVolumes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsFinspaceKxVolume, idFilter, baseNode, optional)
