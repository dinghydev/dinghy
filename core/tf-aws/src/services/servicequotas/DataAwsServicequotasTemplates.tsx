import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/servicequotas_templates

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  aws_region: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsServicequotasTemplates(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicequotas_templates'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsServicequotasTemplatess = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsServicequotasTemplates, node, id)
