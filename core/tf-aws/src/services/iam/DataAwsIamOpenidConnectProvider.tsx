import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamOpenidConnectProvider } from './AwsIamOpenidConnectProvider.tsx'

export const DataAwsIamOpenidConnectProviderInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  url: resolvableValue(z.string().optional()),
})

export const DataAwsIamOpenidConnectProviderOutputSchema = z.object({
  client_id_list: z.string().array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  thumbprint_list: z.string().array().optional(),
})

export type DataAwsIamOpenidConnectProviderInputProps =
  & z.input<typeof DataAwsIamOpenidConnectProviderInputSchema>
  & NodeProps

export type DataAwsIamOpenidConnectProviderOutputProps =
  & z.output<typeof DataAwsIamOpenidConnectProviderOutputSchema>
  & z.output<typeof DataAwsIamOpenidConnectProviderInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_openid_connect_provider

export function DataAwsIamOpenidConnectProvider(
  props: Partial<DataAwsIamOpenidConnectProviderInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsIamOpenidConnectProvider
      _type='aws_iam_openid_connect_provider'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamOpenidConnectProviderInputSchema}
      _outputSchema={DataAwsIamOpenidConnectProviderOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamOpenidConnectProvider = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsIamOpenidConnectProviderOutputProps>(
    DataAwsIamOpenidConnectProvider,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsIamOpenidConnectProviders = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamOpenidConnectProviderOutputProps>(
    DataAwsIamOpenidConnectProvider,
    idFilter,
    baseNode,
    optional,
  )
