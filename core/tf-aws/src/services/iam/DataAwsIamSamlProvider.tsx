import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamSamlProvider } from './AwsIamSamlProvider.tsx'

export const DataAwsIamSamlProviderInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const DataAwsIamSamlProviderOutputSchema = z.object({
  create_date: z.string().optional(),
  name: z.string().optional(),
  saml_metadata_document: z.string().optional(),
  saml_provider_uuid: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  valid_until: z.string().optional(),
})

export type DataAwsIamSamlProviderInputProps =
  & z.input<typeof DataAwsIamSamlProviderInputSchema>
  & NodeProps

export type DataAwsIamSamlProviderOutputProps =
  & z.output<typeof DataAwsIamSamlProviderOutputSchema>
  & z.output<typeof DataAwsIamSamlProviderInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_saml_provider

export function DataAwsIamSamlProvider(
  props: Partial<DataAwsIamSamlProviderInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsIamSamlProvider
      _type='aws_iam_saml_provider'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamSamlProviderInputSchema}
      _outputSchema={DataAwsIamSamlProviderOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamSamlProvider = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsIamSamlProviderOutputProps>(
    DataAwsIamSamlProvider,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsIamSamlProviders = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamSamlProviderOutputProps>(
    DataAwsIamSamlProvider,
    idFilter,
    baseNode,
    optional,
  )
