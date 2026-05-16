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

export const AwsDirectoryServiceConditionalForwarderInputSchema = TfMetaSchema
  .extend({
    directory_id: resolvableValue(z.string()),
    dns_ips: resolvableValue(z.string().array()),
    remote_domain_name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsDirectoryServiceConditionalForwarderOutputSchema = z.object({})

export type AwsDirectoryServiceConditionalForwarderInputProps =
  & z.input<typeof AwsDirectoryServiceConditionalForwarderInputSchema>
  & NodeProps

export type AwsDirectoryServiceConditionalForwarderOutputProps =
  & z.output<typeof AwsDirectoryServiceConditionalForwarderOutputSchema>
  & z.output<typeof AwsDirectoryServiceConditionalForwarderInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/directory_service_conditional_forwarder

export function AwsDirectoryServiceConditionalForwarder(
  props: Partial<AwsDirectoryServiceConditionalForwarderInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_directory_service_conditional_forwarder'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDirectoryServiceConditionalForwarderInputSchema}
      _outputSchema={AwsDirectoryServiceConditionalForwarderOutputSchema}
      {...props}
    />
  )
}

export const useAwsDirectoryServiceConditionalForwarder = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDirectoryServiceConditionalForwarderOutputProps>(
    AwsDirectoryServiceConditionalForwarder,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDirectoryServiceConditionalForwarders = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDirectoryServiceConditionalForwarderOutputProps>(
    AwsDirectoryServiceConditionalForwarder,
    idFilter,
    baseNode,
    optional,
  )
