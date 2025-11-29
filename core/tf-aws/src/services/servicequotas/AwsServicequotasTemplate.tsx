import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/servicequotas_template

export const InputSchema = z.object({
  quota_code: resolvableValue(z.string()),
  service_code: resolvableValue(z.string()),
  value: resolvableValue(z.number()),
  aws_region: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  global_quota: z.boolean().optional(),
  id: z.string().optional(),
  quota_name: z.string().optional(),
  service_name: z.string().optional(),
  unit: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsServicequotasTemplate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicequotas_template'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsServicequotasTemplate = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsServicequotasTemplate, node, id)

export const useAwsServicequotasTemplates = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsServicequotasTemplate, node, id)
