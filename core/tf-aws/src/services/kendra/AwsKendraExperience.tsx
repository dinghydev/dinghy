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

export const AwsKendraExperienceInputSchema = TfMetaSchema.extend({
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

export const AwsKendraExperienceOutputSchema = z.object({
  arn: z.string().optional(),
  endpoints: z.set(z.object({
    endpoint: z.string(),
    endpoint_type: z.string(),
  })).optional(),
  experience_id: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
})

export type AwsKendraExperienceInputProps =
  & z.input<typeof AwsKendraExperienceInputSchema>
  & NodeProps

export type AwsKendraExperienceOutputProps =
  & z.output<typeof AwsKendraExperienceOutputSchema>
  & z.output<typeof AwsKendraExperienceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/kendra_experience

export function AwsKendraExperience(
  props: Partial<AwsKendraExperienceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kendra_experience'
      _category='resource'
      _title={_title}
      _inputSchema={AwsKendraExperienceInputSchema}
      _outputSchema={AwsKendraExperienceOutputSchema}
      {...props}
    />
  )
}

export const useAwsKendraExperience = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsKendraExperienceOutputProps>(
    AwsKendraExperience,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsKendraExperiences = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsKendraExperienceOutputProps>(
    AwsKendraExperience,
    idFilter,
    baseNode,
    optional,
  )
