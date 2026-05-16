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

export const AwsOrganizationsPolicyInputSchema = TfMetaSchema.extend({
  content: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  type: resolvableValue(z.string().optional()),
})

export const AwsOrganizationsPolicyOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsOrganizationsPolicyImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type AwsOrganizationsPolicyInputProps =
  & z.input<typeof AwsOrganizationsPolicyInputSchema>
  & z.input<typeof AwsOrganizationsPolicyImportSchema>
  & NodeProps

export type AwsOrganizationsPolicyOutputProps =
  & z.output<typeof AwsOrganizationsPolicyOutputSchema>
  & z.output<typeof AwsOrganizationsPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/organizations_policy

export function AwsOrganizationsPolicy(
  props: Partial<AwsOrganizationsPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOrganizationsPolicyInputSchema}
      _outputSchema={AwsOrganizationsPolicyOutputSchema}
      _importSchema={AwsOrganizationsPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsOrganizationsPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOrganizationsPolicyOutputProps>(
    AwsOrganizationsPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOrganizationsPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOrganizationsPolicyOutputProps>(
    AwsOrganizationsPolicy,
    idFilter,
    baseNode,
    optional,
  )
