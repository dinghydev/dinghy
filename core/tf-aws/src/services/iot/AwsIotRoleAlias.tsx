import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsIotRoleAliasInputSchema = TfMetaSchema.extend({
  alias: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  credential_duration: resolvableValue(z.number().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsIotRoleAliasOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsIotRoleAliasInputProps =
  & z.input<typeof AwsIotRoleAliasInputSchema>
  & NodeProps

export type AwsIotRoleAliasOutputProps =
  & z.output<typeof AwsIotRoleAliasOutputSchema>
  & z.output<typeof AwsIotRoleAliasInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_role_alias

export function AwsIotRoleAlias(props: Partial<AwsIotRoleAliasInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_role_alias'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotRoleAliasInputSchema}
      _outputSchema={AwsIotRoleAliasOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotRoleAliass = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIotRoleAliasOutputProps>(
    AwsIotRoleAlias,
    idFilter,
    baseNode,
    optional,
  )
