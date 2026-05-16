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

export const AwsIamOpenidConnectProviderInputSchema = TfMetaSchema.extend({
  client_id_list: resolvableValue(z.string().array()),
  url: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  thumbprint_list: resolvableValue(z.string().array().optional()),
})

export const AwsIamOpenidConnectProviderOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsIamOpenidConnectProviderImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsIamOpenidConnectProviderInputProps =
  & z.input<typeof AwsIamOpenidConnectProviderInputSchema>
  & z.input<typeof AwsIamOpenidConnectProviderImportSchema>
  & NodeProps

export type AwsIamOpenidConnectProviderOutputProps =
  & z.output<typeof AwsIamOpenidConnectProviderOutputSchema>
  & z.output<typeof AwsIamOpenidConnectProviderInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_openid_connect_provider

export function AwsIamOpenidConnectProvider(
  props: Partial<AwsIamOpenidConnectProviderInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_openid_connect_provider'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamOpenidConnectProviderInputSchema}
      _outputSchema={AwsIamOpenidConnectProviderOutputSchema}
      _importSchema={AwsIamOpenidConnectProviderImportSchema}
      {...props}
    />
  )
}

export const useAwsIamOpenidConnectProvider = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamOpenidConnectProviderOutputProps>(
    AwsIamOpenidConnectProvider,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamOpenidConnectProviders = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamOpenidConnectProviderOutputProps>(
    AwsIamOpenidConnectProvider,
    idFilter,
    baseNode,
    optional,
  )
