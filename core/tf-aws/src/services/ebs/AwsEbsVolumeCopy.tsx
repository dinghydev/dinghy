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

export const AwsEbsVolumeCopyInputSchema = TfMetaSchema.extend({
  source_volume_id: resolvableValue(z.string()),
  iops: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  size: resolvableValue(z.number().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  throughput: resolvableValue(z.number().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  volume_type: resolvableValue(z.string().optional()),
})

export const AwsEbsVolumeCopyOutputSchema = z.object({
  arn: z.string().optional(),
  availability_zone: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsEbsVolumeCopyImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsEbsVolumeCopyInputProps =
  & z.input<typeof AwsEbsVolumeCopyInputSchema>
  & z.input<typeof AwsEbsVolumeCopyImportSchema>
  & NodeProps

export type AwsEbsVolumeCopyOutputProps =
  & z.output<typeof AwsEbsVolumeCopyOutputSchema>
  & z.output<typeof AwsEbsVolumeCopyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ebs_volume_copy

export function AwsEbsVolumeCopy(props: Partial<AwsEbsVolumeCopyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ebs_volume_copy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEbsVolumeCopyInputSchema}
      _outputSchema={AwsEbsVolumeCopyOutputSchema}
      _importSchema={AwsEbsVolumeCopyImportSchema}
      {...props}
    />
  )
}

export const useAwsEbsVolumeCopy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEbsVolumeCopyOutputProps>(
    AwsEbsVolumeCopy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEbsVolumeCopys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEbsVolumeCopyOutputProps>(
    AwsEbsVolumeCopy,
    idFilter,
    baseNode,
    optional,
  )
