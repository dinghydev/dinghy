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

export const AwsSagemakerDeviceFleetInputSchema = TfMetaSchema.extend({
  device_fleet_name: resolvableValue(z.string()),
  output_config: resolvableValue(z.object({
    kms_key_id: z.string().optional(),
    s3_output_location: z.string(),
  })),
  role_arn: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  enable_iot_role_alias: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSagemakerDeviceFleetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  iot_role_alias: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSagemakerDeviceFleetInputProps =
  & z.input<typeof AwsSagemakerDeviceFleetInputSchema>
  & NodeProps

export type AwsSagemakerDeviceFleetOutputProps =
  & z.output<typeof AwsSagemakerDeviceFleetOutputSchema>
  & z.output<typeof AwsSagemakerDeviceFleetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_device_fleet

export function AwsSagemakerDeviceFleet(
  props: Partial<AwsSagemakerDeviceFleetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_device_fleet'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerDeviceFleetInputSchema}
      _outputSchema={AwsSagemakerDeviceFleetOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerDeviceFleet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerDeviceFleetOutputProps>(
    AwsSagemakerDeviceFleet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerDeviceFleets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerDeviceFleetOutputProps>(
    AwsSagemakerDeviceFleet,
    idFilter,
    baseNode,
    optional,
  )
