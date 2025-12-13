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

export const InputSchema = z.object({
  domain_identifier: resolvableValue(z.string()),
  user_identifier: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  user_type: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  details: z.object({
    iam: z.object({
      arn: z.string(),
    }).array(),
    sso: z.object({
      first_name: z.string(),
      last_name: z.string(),
      user_name: z.string(),
    }).array(),
  }).array().optional(),
  id: z.string().optional(),
  type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/datazone_user_profile

export function AwsDatazoneUserProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_user_profile'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDatazoneUserProfile = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsDatazoneUserProfile, idFilter, baseNode)

export const useAwsDatazoneUserProfiles = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsDatazoneUserProfile, idFilter, baseNode)
