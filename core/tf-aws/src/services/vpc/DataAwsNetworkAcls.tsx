import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsNetworkAclsInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
  vpc_id: resolvableValue(z.string().optional()),
})

export const DataAwsNetworkAclsOutputSchema = z.object({
  id: z.string().optional(),
  ids: z.string().array().optional(),
})

export type DataAwsNetworkAclsInputProps =
  & z.input<typeof DataAwsNetworkAclsInputSchema>
  & NodeProps

export type DataAwsNetworkAclsOutputProps =
  & z.output<typeof DataAwsNetworkAclsOutputSchema>
  & z.output<typeof DataAwsNetworkAclsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/network_acls

export function DataAwsNetworkAcls(
  props: Partial<DataAwsNetworkAclsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_network_acls'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsNetworkAclsInputSchema}
      _outputSchema={DataAwsNetworkAclsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsNetworkAclss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsNetworkAclsOutputProps>(
    DataAwsNetworkAcls,
    idFilter,
    baseNode,
    optional,
  )
