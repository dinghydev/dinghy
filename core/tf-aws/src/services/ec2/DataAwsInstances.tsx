import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsInstancesInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  instance_state_names: resolvableValue(z.string().array().optional()),
  instance_tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsInstancesOutputSchema = z.object({
  id: z.string().optional(),
  ids: z.string().array().optional(),
  ipv6_addresses: z.string().array().optional(),
  private_ips: z.string().array().optional(),
  public_ips: z.string().array().optional(),
})

export type DataAwsInstancesInputProps =
  & z.input<typeof DataAwsInstancesInputSchema>
  & NodeProps

export type DataAwsInstancesOutputProps =
  & z.output<typeof DataAwsInstancesOutputSchema>
  & z.output<typeof DataAwsInstancesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/instances

export function DataAwsInstances(props: Partial<DataAwsInstancesInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_instances'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsInstancesInputSchema}
      _outputSchema={DataAwsInstancesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsInstancess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsInstancesOutputProps>(
    DataAwsInstances,
    idFilter,
    baseNode,
    optional,
  )
