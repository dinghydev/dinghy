import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSsoadminApplicationProvidersInputSchema = TfMetaSchema
  .extend({
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsSsoadminApplicationProvidersOutputSchema = z.object({
  application_providers: z.object({
    application_provider_arn: z.string(),
    display_data: z.object({
      description: z.string(),
      display_name: z.string(),
      icon_url: z.string(),
    }).array(),
    federation_protocol: z.string(),
  }).array().optional(),
  id: z.string().optional(),
})

export type DataAwsSsoadminApplicationProvidersInputProps =
  & z.input<typeof DataAwsSsoadminApplicationProvidersInputSchema>
  & NodeProps

export type DataAwsSsoadminApplicationProvidersOutputProps =
  & z.output<typeof DataAwsSsoadminApplicationProvidersOutputSchema>
  & z.output<typeof DataAwsSsoadminApplicationProvidersInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssoadmin_application_providers

export function DataAwsSsoadminApplicationProviders(
  props: Partial<DataAwsSsoadminApplicationProvidersInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_application_providers'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsoadminApplicationProvidersInputSchema}
      _outputSchema={DataAwsSsoadminApplicationProvidersOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSsoadminApplicationProviderss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSsoadminApplicationProvidersOutputProps>(
    DataAwsSsoadminApplicationProviders,
    idFilter,
    baseNode,
    optional,
  )
