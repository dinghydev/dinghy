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
  content: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  type: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/organizations_policy

export function AwsOrganizationsPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsOrganizationsPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsOrganizationsPolicy,
    idFilter,
    baseNode,
    optional,
  )
