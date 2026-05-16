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

export const AwsNeptuneSubnetGroupInputSchema = TfMetaSchema.extend({
  subnet_ids: resolvableValue(z.string().array()),
  description: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsNeptuneSubnetGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNeptuneSubnetGroupInputProps =
  & z.input<typeof AwsNeptuneSubnetGroupInputSchema>
  & NodeProps

export type AwsNeptuneSubnetGroupOutputProps =
  & z.output<typeof AwsNeptuneSubnetGroupOutputSchema>
  & z.output<typeof AwsNeptuneSubnetGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_subnet_group

export function AwsNeptuneSubnetGroup(
  props: Partial<AwsNeptuneSubnetGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_neptune_subnet_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNeptuneSubnetGroupInputSchema}
      _outputSchema={AwsNeptuneSubnetGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsNeptuneSubnetGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNeptuneSubnetGroupOutputProps>(
    AwsNeptuneSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNeptuneSubnetGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNeptuneSubnetGroupOutputProps>(
    AwsNeptuneSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )
