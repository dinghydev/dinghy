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
  availability_zone: resolvableValue(z.string()),
  encrypted: resolvableValue(z.boolean().optional()),
  final_snapshot: resolvableValue(z.boolean().optional()),
  iops: resolvableValue(z.number().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  multi_attach_enabled: resolvableValue(z.boolean().optional()),
  outpost_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  size: resolvableValue(z.number().optional()),
  snapshot_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  throughput: resolvableValue(z.number().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  type: resolvableValue(z.string().optional()),
  volume_initialization_rate: resolvableValue(z.number().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  create_time: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ebs_volume

export function AwsEbsVolume(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ebs_volume'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEbsVolume = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsEbsVolume, idFilter, baseNode)

export const useAwsEbsVolumes = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsEbsVolume, idFilter, baseNode)
