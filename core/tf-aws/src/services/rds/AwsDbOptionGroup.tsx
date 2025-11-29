import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/db_option_group

export const InputSchema = z.object({
  engine_name: resolvableValue(z.string()),
  major_engine_version: resolvableValue(z.string()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  option: resolvableValue(
    z.object({
      db_security_group_memberships: z.string().array().optional(),
      option_name: z.string(),
      port: z.number().optional(),
      version: z.string().optional(),
      vpc_security_group_memberships: z.string().array().optional(),
    }).array().optional(),
  ),
  option_group_description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDbOptionGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_option_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDbOptionGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDbOptionGroup, node, id)

export const useAwsDbOptionGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDbOptionGroup, node, id)
