import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRedshiftSubnetGroup } from './AwsRedshiftSubnetGroup.tsx'

export const DataAwsRedshiftSubnetGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsRedshiftSubnetGroupOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  subnet_ids: z.set(z.string()).optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsRedshiftSubnetGroupInputProps =
  & z.input<typeof DataAwsRedshiftSubnetGroupInputSchema>
  & NodeProps

export type DataAwsRedshiftSubnetGroupOutputProps =
  & z.output<typeof DataAwsRedshiftSubnetGroupOutputSchema>
  & z.output<typeof DataAwsRedshiftSubnetGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/redshift_subnet_group

export function DataAwsRedshiftSubnetGroup(
  props: Partial<DataAwsRedshiftSubnetGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsRedshiftSubnetGroup
      _type='aws_redshift_subnet_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRedshiftSubnetGroupInputSchema}
      _outputSchema={DataAwsRedshiftSubnetGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRedshiftSubnetGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsRedshiftSubnetGroupOutputProps>(
    DataAwsRedshiftSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRedshiftSubnetGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRedshiftSubnetGroupOutputProps>(
    DataAwsRedshiftSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )
