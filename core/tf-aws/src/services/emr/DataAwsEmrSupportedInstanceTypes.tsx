import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  release_label: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  supported_instance_types: z.object({
    architecture: z.string(),
    ebs_optimized_available: z.boolean(),
    ebs_optimized_by_default: z.boolean(),
    ebs_storage_only: z.boolean(),
    instance_family_id: z.string(),
    is_64_bits_only: z.boolean(),
    memory_gb: z.number(),
    number_of_disks: z.number(),
    storage_gb: z.number(),
    type: z.string(),
    vcpu: z.number(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/emr_supported_instance_types

export function DataAwsEmrSupportedInstanceTypes(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emr_supported_instance_types'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEmrSupportedInstanceTypess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsEmrSupportedInstanceTypes,
    idFilter,
    baseNode,
    optional,
  )
