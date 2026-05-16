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

export const AwsDatazoneEnvironmentProfileInputSchema = TfMetaSchema.extend({
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
    }).array().optional(),
  ),
})

export const AwsDatazoneEnvironmentProfileOutputSchema = z.object({
  created_at: z.string().optional(),
  created_by: z.string().optional(),
  id: z.string().optional(),
  updated_at: z.string().optional(),
})

export type AwsDatazoneEnvironmentProfileInputProps =
  & z.input<typeof AwsDatazoneEnvironmentProfileInputSchema>
  & NodeProps

export type AwsDatazoneEnvironmentProfileOutputProps =
  & z.output<typeof AwsDatazoneEnvironmentProfileOutputSchema>
  & z.output<typeof AwsDatazoneEnvironmentProfileInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datazone_environment_profile

export function AwsDatazoneEnvironmentProfile(
  props: Partial<AwsDatazoneEnvironmentProfileInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_environment_profile'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatazoneEnvironmentProfileInputSchema}
      _outputSchema={AwsDatazoneEnvironmentProfileOutputSchema}
      {...props}
    />
  )
}

export const useAwsDatazoneEnvironmentProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatazoneEnvironmentProfileOutputProps>(
    AwsDatazoneEnvironmentProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatazoneEnvironmentProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatazoneEnvironmentProfileOutputProps>(
    AwsDatazoneEnvironmentProfile,
    idFilter,
    baseNode,
    optional,
  )
