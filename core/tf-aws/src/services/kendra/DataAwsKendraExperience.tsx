import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKendraExperience } from './AwsKendraExperience.tsx'

export const InputSchema = z.object({
  experience_id: resolvableValue(z.string()),
  index_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  configuration: z.object({
    content_source_configuration: z.object({
      data_source_ids: z.set(z.string()),
      direct_put_content: z.boolean(),
      faq_ids: z.set(z.string()),
    }).array(),
    user_identity_configuration: z.object({
      identity_attribute_name: z.string(),
    }).array(),
  }).array().optional(),
  created_at: z.string().optional(),
  description: z.string().optional(),
  endpoints: z.set(z.object({
    endpoint: z.string(),
    endpoint_type: z.string(),
  })).optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/kendra_experience

export function DataAwsKendraExperience(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsKendraExperience = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsKendraExperience,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsKendraExperiences = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsKendraExperience,
    idFilter,
    baseNode,
    optional,
  )
