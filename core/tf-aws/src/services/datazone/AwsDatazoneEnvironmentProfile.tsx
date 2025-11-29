import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/datazone_environment_profile

export const InputSchema = z.object({
  aws_account_region: resolvableValue(z.string()),
  domain_identifier: resolvableValue(z.string()),
  environment_blueprint_identifier: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  project_identifier: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  user_parameters: resolvableValue(
    z.object({
      name: z.string().optional(),
      value: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  created_at: z.string().optional(),
  created_by: z.string().optional(),
  id: z.string().optional(),
  updated_at: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDatazoneEnvironmentProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_environment_profile'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDatazoneEnvironmentProfile = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDatazoneEnvironmentProfile, node, id)

export const useAwsDatazoneEnvironmentProfiles = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDatazoneEnvironmentProfile, node, id)
