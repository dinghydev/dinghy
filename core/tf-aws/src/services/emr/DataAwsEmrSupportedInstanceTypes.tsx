import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEmrSupportedInstanceTypesInputSchema = TfMetaSchema.extend({
  release_label: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsEmrSupportedInstanceTypesOutputSchema = z.object({
  id: z.string().optional(),
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

export type DataAwsEmrSupportedInstanceTypesInputProps =
  & z.input<typeof DataAwsEmrSupportedInstanceTypesInputSchema>
  & NodeProps

export type DataAwsEmrSupportedInstanceTypesOutputProps =
  & z.output<typeof DataAwsEmrSupportedInstanceTypesOutputSchema>
  & z.output<typeof DataAwsEmrSupportedInstanceTypesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/emr_supported_instance_types

export function DataAwsEmrSupportedInstanceTypes(
  props: Partial<DataAwsEmrSupportedInstanceTypesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emr_supported_instance_types'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEmrSupportedInstanceTypesInputSchema}
      _outputSchema={DataAwsEmrSupportedInstanceTypesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEmrSupportedInstanceTypess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEmrSupportedInstanceTypesOutputProps>(
    DataAwsEmrSupportedInstanceTypes,
    idFilter,
    baseNode,
    optional,
  )
