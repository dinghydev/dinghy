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

export const AwsDbSubnetGroupInputSchema = TfMetaSchema.extend({
  subnet_ids: resolvableValue(z.string().array()),
  description: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDbSubnetGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  supported_network_types: z.set(z.string()).optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export const AwsDbSubnetGroupImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsDbSubnetGroupInputProps =
  & z.input<typeof AwsDbSubnetGroupInputSchema>
  & z.input<typeof AwsDbSubnetGroupImportSchema>
  & NodeProps

export type AwsDbSubnetGroupOutputProps =
  & z.output<typeof AwsDbSubnetGroupOutputSchema>
  & z.output<typeof AwsDbSubnetGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/db_subnet_group

export function AwsDbSubnetGroup(props: Partial<AwsDbSubnetGroupInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_subnet_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDbSubnetGroupInputSchema}
      _outputSchema={AwsDbSubnetGroupOutputSchema}
      _importSchema={AwsDbSubnetGroupImportSchema}
      {...props}
    />
  )
}

export const useAwsDbSubnetGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDbSubnetGroupOutputProps>(
    AwsDbSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDbSubnetGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDbSubnetGroupOutputProps>(
    AwsDbSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )
