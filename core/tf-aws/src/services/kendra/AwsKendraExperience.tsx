import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kendra_experience

export const InputSchema = z.object({
  index_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      content_source_configuration: z.object({
        data_source_ids: z.string().array().optional(),
        direct_put_content: z.boolean().optional(),
        faq_ids: z.string().array().optional(),
      }).optional(),
      user_identity_configuration: z.object({
        identity_attribute_name: z.string(),
      }).optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  endpoints: z.object({
    endpoint: z.string(),
    endpoint_type: z.string(),
  }).array().optional(),
  experience_id: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsKendraExperience(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kendra_experience'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKendraExperience = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsKendraExperience, node, id)

export const useAwsKendraExperiences = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsKendraExperience, node, id)
