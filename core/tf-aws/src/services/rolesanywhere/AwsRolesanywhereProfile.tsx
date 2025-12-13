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
  name: resolvableValue(z.string()),
  duration_seconds: resolvableValue(z.number().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  managed_policy_arns: resolvableValue(z.string().array().optional()),
  require_instance_properties: resolvableValue(z.boolean().optional()),
  role_arns: resolvableValue(z.string().array().optional()),
  session_policy: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/rolesanywhere_profile

export function AwsRolesanywhereProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rolesanywhere_profile'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRolesanywhereProfile = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsRolesanywhereProfile, idFilter, baseNode)

export const useAwsRolesanywhereProfiles = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsRolesanywhereProfile, idFilter, baseNode)
