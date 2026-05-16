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

export const AwsServiceDiscoveryInstanceInputSchema = TfMetaSchema.extend({
  attributes: resolvableValue(z.record(z.string(), z.string())),
  instance_id: resolvableValue(z.string()),
  service_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsServiceDiscoveryInstanceOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsServiceDiscoveryInstanceInputProps =
  & z.input<typeof AwsServiceDiscoveryInstanceInputSchema>
  & NodeProps

export type AwsServiceDiscoveryInstanceOutputProps =
  & z.output<typeof AwsServiceDiscoveryInstanceOutputSchema>
  & z.output<typeof AwsServiceDiscoveryInstanceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/service_discovery_instance

export function AwsServiceDiscoveryInstance(
  props: Partial<AwsServiceDiscoveryInstanceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_service_discovery_instance'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServiceDiscoveryInstanceInputSchema}
      _outputSchema={AwsServiceDiscoveryInstanceOutputSchema}
      {...props}
    />
  )
}

export const useAwsServiceDiscoveryInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServiceDiscoveryInstanceOutputProps>(
    AwsServiceDiscoveryInstance,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServiceDiscoveryInstances = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServiceDiscoveryInstanceOutputProps>(
    AwsServiceDiscoveryInstance,
    idFilter,
    baseNode,
    optional,
  )
