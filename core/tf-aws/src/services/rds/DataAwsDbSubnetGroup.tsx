import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDbSubnetGroup } from './AwsDbSubnetGroup.tsx'

export const DataAwsDbSubnetGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsDbSubnetGroupOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  status: z.string().optional(),
  subnet_ids: z.set(z.string()).optional(),
  supported_network_types: z.set(z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type DataAwsDbSubnetGroupInputProps =
  & z.input<typeof DataAwsDbSubnetGroupInputSchema>
  & NodeProps

export type DataAwsDbSubnetGroupOutputProps =
  & z.output<typeof DataAwsDbSubnetGroupOutputSchema>
  & z.output<typeof DataAwsDbSubnetGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/db_subnet_group

export function DataAwsDbSubnetGroup(
  props: Partial<DataAwsDbSubnetGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDbSubnetGroup
      _type='aws_db_subnet_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDbSubnetGroupInputSchema}
      _outputSchema={DataAwsDbSubnetGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDbSubnetGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsDbSubnetGroupOutputProps>(
    DataAwsDbSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDbSubnetGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDbSubnetGroupOutputProps>(
    DataAwsDbSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )
