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

export const AwsCloud9EnvironmentMembershipInputSchema = TfMetaSchema.extend({
  environment_id: resolvableValue(z.string()),
  permissions: resolvableValue(z.string()),
  user_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsCloud9EnvironmentMembershipOutputSchema = z.object({
  id: z.string().optional(),
  user_id: z.string().optional(),
})

export type AwsCloud9EnvironmentMembershipInputProps =
  & z.input<typeof AwsCloud9EnvironmentMembershipInputSchema>
  & NodeProps

export type AwsCloud9EnvironmentMembershipOutputProps =
  & z.output<typeof AwsCloud9EnvironmentMembershipOutputSchema>
  & z.output<typeof AwsCloud9EnvironmentMembershipInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloud9_environment_membership

export function AwsCloud9EnvironmentMembership(
  props: Partial<AwsCloud9EnvironmentMembershipInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloud9_environment_membership'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloud9EnvironmentMembershipInputSchema}
      _outputSchema={AwsCloud9EnvironmentMembershipOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloud9EnvironmentMembership = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloud9EnvironmentMembershipOutputProps>(
    AwsCloud9EnvironmentMembership,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloud9EnvironmentMemberships = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloud9EnvironmentMembershipOutputProps>(
    AwsCloud9EnvironmentMembership,
    idFilter,
    baseNode,
    optional,
  )
