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

export const InputSchema = TfMetaSchema.extend({
  account_id: resolvableValue(z.string()),
  service_principal: resolvableValue(z.string()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  delegation_enabled_date: z.string().optional(),
  email: z.string().optional(),
  id: z.string().optional(),
  joined_method: z.string().optional(),
  joined_timestamp: z.string().optional(),
  name: z.string().optional(),
  status: z.string().optional(),
})

export const ImportSchema = z.object({
  delegated_account_id: resolvableValue(z.string()),
  service_principal: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/organizations_delegated_administrator

export function AwsOrganizationsDelegatedAdministrator(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_delegated_administrator'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsOrganizationsDelegatedAdministrator = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsOrganizationsDelegatedAdministrator,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOrganizationsDelegatedAdministrators = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsOrganizationsDelegatedAdministrator,
    idFilter,
    baseNode,
    optional,
  )
