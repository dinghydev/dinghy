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

export const DataAwsEc2InstanceTypeOfferingInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  location_type: resolvableValue(z.string().optional()),
  preferred_instance_types: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsEc2InstanceTypeOfferingOutputSchema = z.object({
  id: z.string().optional(),
  instance_type: z.string().optional(),
  location: z.string().optional(),
})

export type DataAwsEc2InstanceTypeOfferingInputProps =
  & z.input<typeof DataAwsEc2InstanceTypeOfferingInputSchema>
  & NodeProps

export type DataAwsEc2InstanceTypeOfferingOutputProps =
  & z.output<typeof DataAwsEc2InstanceTypeOfferingOutputSchema>
  & z.output<typeof DataAwsEc2InstanceTypeOfferingInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_instance_type_offering

export function DataAwsEc2InstanceTypeOffering(
  props: Partial<DataAwsEc2InstanceTypeOfferingInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_instance_type_offering'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2InstanceTypeOfferingInputSchema}
      _outputSchema={DataAwsEc2InstanceTypeOfferingOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2InstanceTypeOffering = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEc2InstanceTypeOfferingOutputProps>(
    DataAwsEc2InstanceTypeOffering,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2InstanceTypeOfferings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2InstanceTypeOfferingOutputProps>(
    DataAwsEc2InstanceTypeOffering,
    idFilter,
    baseNode,
    optional,
  )
