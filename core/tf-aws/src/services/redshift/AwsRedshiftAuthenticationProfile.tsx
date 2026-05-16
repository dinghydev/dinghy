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

export const AwsRedshiftAuthenticationProfileInputSchema = TfMetaSchema.extend({
  authentication_profile_content: resolvableValue(z.string()),
  authentication_profile_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsRedshiftAuthenticationProfileOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsRedshiftAuthenticationProfileInputProps =
  & z.input<typeof AwsRedshiftAuthenticationProfileInputSchema>
  & NodeProps

export type AwsRedshiftAuthenticationProfileOutputProps =
  & z.output<typeof AwsRedshiftAuthenticationProfileOutputSchema>
  & z.output<typeof AwsRedshiftAuthenticationProfileInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_authentication_profile

export function AwsRedshiftAuthenticationProfile(
  props: Partial<AwsRedshiftAuthenticationProfileInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_authentication_profile'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftAuthenticationProfileInputSchema}
      _outputSchema={AwsRedshiftAuthenticationProfileOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftAuthenticationProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftAuthenticationProfileOutputProps>(
    AwsRedshiftAuthenticationProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftAuthenticationProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftAuthenticationProfileOutputProps>(
    AwsRedshiftAuthenticationProfile,
    idFilter,
    baseNode,
    optional,
  )
