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

export const InputSchema = TfMetaSchema.extend({
  domain_identifier: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  owning_project_identifier: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  model: resolvableValue(
    z.object({
      smithy: z.string(),
    }).array().optional(),
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
  imports: z.object({
    name: z.string(),
    revision: z.string(),
  }).array().optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/datazone_form_type

export function AwsDatazoneFormType(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsDatazoneFormType = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsDatazoneFormType, idFilter, baseNode, optional)

export const useAwsDatazoneFormTypes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsDatazoneFormType, idFilter, baseNode, optional)
