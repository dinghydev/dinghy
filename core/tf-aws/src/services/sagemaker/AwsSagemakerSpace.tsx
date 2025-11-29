import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_space

export const InputSchema = z.object({
  domain_id: resolvableValue(z.string()),
  space_name: resolvableValue(z.string()),
  ownership_settings: resolvableValue(
    z.object({
      owner_user_profile_name: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  space_display_name: resolvableValue(z.string().optional()),
  space_settings: resolvableValue(
    z.object({
      app_type: z.string().optional(),
    }).optional(),
  ),
  space_sharing_settings: resolvableValue(
    z.object({
      sharing_type: z.string(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  home_efs_file_system_uid: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  url: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSagemakerSpace(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_space'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerSpace = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSagemakerSpace, node, id)

export const useAwsSagemakerSpaces = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSagemakerSpace, node, id)
