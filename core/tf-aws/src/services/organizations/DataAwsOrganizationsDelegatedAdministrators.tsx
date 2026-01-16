import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = TfMetaSchema.extend({
  service_principal: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  delegated_administrators: z.set(z.object({
    arn: z.string(),
    delegation_enabled_date: z.string(),
    email: z.string(),
    id: z.string(),
    joined_method: z.string(),
    joined_timestamp: z.string(),
    name: z.string(),
    status: z.string(),
  })).optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/organizations_delegated_administrators

export function DataAwsOrganizationsDelegatedAdministrators(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_delegated_administrators'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOrganizationsDelegatedAdministratorss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsOrganizationsDelegatedAdministrators,
    idFilter,
    baseNode,
    optional,
  )
