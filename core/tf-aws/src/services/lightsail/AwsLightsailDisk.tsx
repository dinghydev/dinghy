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

export const AwsLightsailDiskInputSchema = TfMetaSchema.extend({
  availability_zone: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  size_in_gb: resolvableValue(z.number()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsLightsailDiskOutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  support_code: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsLightsailDiskInputProps =
  & z.input<typeof AwsLightsailDiskInputSchema>
  & NodeProps

export type AwsLightsailDiskOutputProps =
  & z.output<typeof AwsLightsailDiskOutputSchema>
  & z.output<typeof AwsLightsailDiskInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_disk

export function AwsLightsailDisk(props: Partial<AwsLightsailDiskInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_disk'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailDiskInputSchema}
      _outputSchema={AwsLightsailDiskOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailDisk = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailDiskOutputProps>(
    AwsLightsailDisk,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailDisks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailDiskOutputProps>(
    AwsLightsailDisk,
    idFilter,
    baseNode,
    optional,
  )
