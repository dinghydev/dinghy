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

export const AwsDevicefarmDevicePoolInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  project_arn: resolvableValue(z.string()),
  rule: resolvableValue(
    z.object({
      attribute: z.string().optional(),
      operator: z.string().optional(),
      value: z.string().optional(),
    }).array(),
  ),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  max_devices: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDevicefarmDevicePoolOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export const AwsDevicefarmDevicePoolImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsDevicefarmDevicePoolInputProps =
  & z.input<typeof AwsDevicefarmDevicePoolInputSchema>
  & z.input<typeof AwsDevicefarmDevicePoolImportSchema>
  & NodeProps

export type AwsDevicefarmDevicePoolOutputProps =
  & z.output<typeof AwsDevicefarmDevicePoolOutputSchema>
  & z.output<typeof AwsDevicefarmDevicePoolInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/devicefarm_device_pool

export function AwsDevicefarmDevicePool(
  props: Partial<AwsDevicefarmDevicePoolInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_devicefarm_device_pool'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDevicefarmDevicePoolInputSchema}
      _outputSchema={AwsDevicefarmDevicePoolOutputSchema}
      _importSchema={AwsDevicefarmDevicePoolImportSchema}
      {...props}
    />
  )
}

export const useAwsDevicefarmDevicePool = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDevicefarmDevicePoolOutputProps>(
    AwsDevicefarmDevicePool,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDevicefarmDevicePools = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDevicefarmDevicePoolOutputProps>(
    AwsDevicefarmDevicePool,
    idFilter,
    baseNode,
    optional,
  )
