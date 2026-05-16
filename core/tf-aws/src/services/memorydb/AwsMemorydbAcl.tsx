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

export const AwsMemorydbAclInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  user_names: resolvableValue(z.string().array().optional()),
})

export const AwsMemorydbAclOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  minimum_engine_version: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsMemorydbAclInputProps =
  & z.input<typeof AwsMemorydbAclInputSchema>
  & NodeProps

export type AwsMemorydbAclOutputProps =
  & z.output<typeof AwsMemorydbAclOutputSchema>
  & z.output<typeof AwsMemorydbAclInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/memorydb_acl

export function AwsMemorydbAcl(props: Partial<AwsMemorydbAclInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_memorydb_acl'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMemorydbAclInputSchema}
      _outputSchema={AwsMemorydbAclOutputSchema}
      {...props}
    />
  )
}

export const useAwsMemorydbAcl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMemorydbAclOutputProps>(
    AwsMemorydbAcl,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMemorydbAcls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMemorydbAclOutputProps>(
    AwsMemorydbAcl,
    idFilter,
    baseNode,
    optional,
  )
