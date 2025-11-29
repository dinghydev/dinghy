import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/organizations_organizational_unit

export const InputSchema = z.object({
  parent_id: resolvableValue(z.string()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  accounts: z.object({
    arn: z.string(),
    email: z.string(),
    id: z.string(),
    name: z.string(),
  }).array().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsOrganizationsOrganizationalUnit(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_organizational_unit'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsOrganizationsOrganizationalUnit = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsOrganizationsOrganizationalUnit, node, id)

export const useAwsOrganizationsOrganizationalUnits = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsOrganizationsOrganizationalUnit, node, id)
