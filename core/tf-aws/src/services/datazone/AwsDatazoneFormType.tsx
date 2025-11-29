import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/datazone_form_type

export const InputSchema = z.object({
  domain_identifier: resolvableValue(z.string()),
  imports: resolvableValue(
    z.object({
      name: z.string(),
      revision: z.string(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  owning_project_identifier: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  model: resolvableValue(
    z.object({
      smithy: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  created_at: z.string().optional(),
  created_by: z.string().optional(),
  origin_domain_id: z.string().optional(),
  origin_project_id: z.string().optional(),
  revision: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDatazoneFormType(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_form_type'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDatazoneFormType = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDatazoneFormType, node, id)

export const useAwsDatazoneFormTypes = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDatazoneFormType, node, id)
