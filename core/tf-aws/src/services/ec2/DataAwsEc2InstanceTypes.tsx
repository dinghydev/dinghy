import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEc2InstanceTypesInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsEc2InstanceTypesOutputSchema = z.object({
  id: z.string().optional(),
  instance_types: z.string().array().optional(),
})

export type DataAwsEc2InstanceTypesInputProps =
  & z.input<typeof DataAwsEc2InstanceTypesInputSchema>
  & NodeProps

export type DataAwsEc2InstanceTypesOutputProps =
  & z.output<typeof DataAwsEc2InstanceTypesOutputSchema>
  & z.output<typeof DataAwsEc2InstanceTypesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_instance_types

export function DataAwsEc2InstanceTypes(
  props: Partial<DataAwsEc2InstanceTypesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_instance_types'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2InstanceTypesInputSchema}
      _outputSchema={DataAwsEc2InstanceTypesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2InstanceTypess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2InstanceTypesOutputProps>(
    DataAwsEc2InstanceTypes,
    idFilter,
    baseNode,
    optional,
  )
