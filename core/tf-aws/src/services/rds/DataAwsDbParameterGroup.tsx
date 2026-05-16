import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDbParameterGroup } from './AwsDbParameterGroup.tsx'

export const DataAwsDbParameterGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsDbParameterGroupOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  family: z.string().optional(),
})

export type DataAwsDbParameterGroupInputProps =
  & z.input<typeof DataAwsDbParameterGroupInputSchema>
  & NodeProps

export type DataAwsDbParameterGroupOutputProps =
  & z.output<typeof DataAwsDbParameterGroupOutputSchema>
  & z.output<typeof DataAwsDbParameterGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/db_parameter_group

export function DataAwsDbParameterGroup(
  props: Partial<DataAwsDbParameterGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDbParameterGroup
      _type='aws_db_parameter_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDbParameterGroupInputSchema}
      _outputSchema={DataAwsDbParameterGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDbParameterGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsDbParameterGroupOutputProps>(
    DataAwsDbParameterGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDbParameterGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDbParameterGroupOutputProps>(
    DataAwsDbParameterGroup,
    idFilter,
    baseNode,
    optional,
  )
