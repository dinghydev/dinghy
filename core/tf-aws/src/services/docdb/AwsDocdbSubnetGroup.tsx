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

export const AwsDocdbSubnetGroupInputSchema = TfMetaSchema.extend({
  subnet_ids: resolvableValue(z.string().array()),
  description: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDocdbSubnetGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  supported_network_types: z.set(z.string()).optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDocdbSubnetGroupInputProps =
  & z.input<typeof AwsDocdbSubnetGroupInputSchema>
  & NodeProps

export type AwsDocdbSubnetGroupOutputProps =
  & z.output<typeof AwsDocdbSubnetGroupOutputSchema>
  & z.output<typeof AwsDocdbSubnetGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/docdb_subnet_group

export function AwsDocdbSubnetGroup(
  props: Partial<AwsDocdbSubnetGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_docdb_subnet_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDocdbSubnetGroupInputSchema}
      _outputSchema={AwsDocdbSubnetGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsDocdbSubnetGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDocdbSubnetGroupOutputProps>(
    AwsDocdbSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDocdbSubnetGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDocdbSubnetGroupOutputProps>(
    AwsDocdbSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )
