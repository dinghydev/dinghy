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

export const AwsOrganizationsResourcePolicyInputSchema = TfMetaSchema.extend({
  content: resolvableValue(z.string()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsOrganizationsResourcePolicyOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsOrganizationsResourcePolicyImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type AwsOrganizationsResourcePolicyInputProps =
  & z.input<typeof AwsOrganizationsResourcePolicyInputSchema>
  & z.input<typeof AwsOrganizationsResourcePolicyImportSchema>
  & NodeProps

export type AwsOrganizationsResourcePolicyOutputProps =
  & z.output<typeof AwsOrganizationsResourcePolicyOutputSchema>
  & z.output<typeof AwsOrganizationsResourcePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/organizations_resource_policy

export function AwsOrganizationsResourcePolicy(
  props: Partial<AwsOrganizationsResourcePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_resource_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOrganizationsResourcePolicyInputSchema}
      _outputSchema={AwsOrganizationsResourcePolicyOutputSchema}
      _importSchema={AwsOrganizationsResourcePolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsOrganizationsResourcePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOrganizationsResourcePolicyOutputProps>(
    AwsOrganizationsResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOrganizationsResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOrganizationsResourcePolicyOutputProps>(
    AwsOrganizationsResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )
