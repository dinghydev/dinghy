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

export const AwsServicequotasTemplateInputSchema = TfMetaSchema.extend({
  quota_code: resolvableValue(z.string()),
  service_code: resolvableValue(z.string()),
  value: resolvableValue(z.number()),
  aws_region: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsServicequotasTemplateOutputSchema = z.object({
  global_quota: z.boolean().optional(),
  id: z.string().optional(),
  quota_name: z.string().optional(),
  service_name: z.string().optional(),
  unit: z.string().optional(),
})

export type AwsServicequotasTemplateInputProps =
  & z.input<typeof AwsServicequotasTemplateInputSchema>
  & NodeProps

export type AwsServicequotasTemplateOutputProps =
  & z.output<typeof AwsServicequotasTemplateOutputSchema>
  & z.output<typeof AwsServicequotasTemplateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicequotas_template

export function AwsServicequotasTemplate(
  props: Partial<AwsServicequotasTemplateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicequotas_template'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicequotasTemplateInputSchema}
      _outputSchema={AwsServicequotasTemplateOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicequotasTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServicequotasTemplateOutputProps>(
    AwsServicequotasTemplate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicequotasTemplates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServicequotasTemplateOutputProps>(
    AwsServicequotasTemplate,
    idFilter,
    baseNode,
    optional,
  )
