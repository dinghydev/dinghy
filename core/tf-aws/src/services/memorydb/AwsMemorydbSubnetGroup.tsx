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

export const AwsMemorydbSubnetGroupInputSchema = TfMetaSchema.extend({
  subnet_ids: resolvableValue(z.string().array()),
  description: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsMemorydbSubnetGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type AwsMemorydbSubnetGroupInputProps =
  & z.input<typeof AwsMemorydbSubnetGroupInputSchema>
  & NodeProps

export type AwsMemorydbSubnetGroupOutputProps =
  & z.output<typeof AwsMemorydbSubnetGroupOutputSchema>
  & z.output<typeof AwsMemorydbSubnetGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/memorydb_subnet_group

export function AwsMemorydbSubnetGroup(
  props: Partial<AwsMemorydbSubnetGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_memorydb_subnet_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMemorydbSubnetGroupInputSchema}
      _outputSchema={AwsMemorydbSubnetGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsMemorydbSubnetGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMemorydbSubnetGroupOutputProps>(
    AwsMemorydbSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMemorydbSubnetGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMemorydbSubnetGroupOutputProps>(
    AwsMemorydbSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )
