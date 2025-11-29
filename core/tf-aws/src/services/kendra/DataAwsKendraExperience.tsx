import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKendraExperience } from './AwsKendraExperience.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/kendra_experience

export const InputSchema = z.object({
  experience_id: resolvableValue(z.string()),
  index_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  configuration: z.object({
    content_source_configuration: z.object({
      data_source_ids: z.string().array(),
      direct_put_content: z.boolean(),
      faq_ids: z.string().array(),
    }).array(),
    user_identity_configuration: z.object({
      identity_attribute_name: z.string(),
    }).array(),
  }).array().optional(),
  created_at: z.string().optional(),
  description: z.string().optional(),
  endpoints: z.object({
    endpoint: z.string(),
    endpoint_type: z.string(),
  }).array().optional(),
  error_message: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  role_arn: z.string().optional(),
  status: z.string().optional(),
  updated_at: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsKendraExperience(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsKendraExperience
      _type='aws_kendra_experience'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKendraExperience = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsKendraExperience, node, id)

export const useDataAwsKendraExperiences = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsKendraExperience, node, id)
