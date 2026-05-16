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

export const AwsDbOptionGroupInputSchema = TfMetaSchema.extend({
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
      option_settings: z.object({
        name: z.string(),
        value: z.string(),
      }).array().optional(),
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

export const AwsDbOptionGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDbOptionGroupInputProps =
  & z.input<typeof AwsDbOptionGroupInputSchema>
  & NodeProps

export type AwsDbOptionGroupOutputProps =
  & z.output<typeof AwsDbOptionGroupOutputSchema>
  & z.output<typeof AwsDbOptionGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/db_option_group

export function AwsDbOptionGroup(props: Partial<AwsDbOptionGroupInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_option_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDbOptionGroupInputSchema}
      _outputSchema={AwsDbOptionGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsDbOptionGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDbOptionGroupOutputProps>(
    AwsDbOptionGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDbOptionGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDbOptionGroupOutputProps>(
    AwsDbOptionGroup,
    idFilter,
    baseNode,
    optional,
  )
