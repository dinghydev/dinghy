import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsServicequotasTemplatesInputSchema = TfMetaSchema.extend({
  aws_region: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsServicequotasTemplatesOutputSchema = z.object({
  id: z.string().optional(),
  templates: z.object({
    global_quota: z.boolean(),
    quota_code: z.string(),
    quota_name: z.string(),
    region: z.string(),
    service_code: z.string(),
    service_name: z.string(),
    unit: z.string(),
    value: z.number(),
  }).array().optional(),
})

export type DataAwsServicequotasTemplatesInputProps =
  & z.input<typeof DataAwsServicequotasTemplatesInputSchema>
  & NodeProps

export type DataAwsServicequotasTemplatesOutputProps =
  & z.output<typeof DataAwsServicequotasTemplatesOutputSchema>
  & z.output<typeof DataAwsServicequotasTemplatesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/servicequotas_templates

export function DataAwsServicequotasTemplates(
  props: Partial<DataAwsServicequotasTemplatesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicequotas_templates'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsServicequotasTemplatesInputSchema}
      _outputSchema={DataAwsServicequotasTemplatesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsServicequotasTemplatess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsServicequotasTemplatesOutputProps>(
    DataAwsServicequotasTemplates,
    idFilter,
    baseNode,
    optional,
  )
