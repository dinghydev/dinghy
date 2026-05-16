import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSecurityGroupsInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsSecurityGroupsOutputSchema = z.object({
  arns: z.string().array().optional(),
  id: z.string().optional(),
  ids: z.string().array().optional(),
  vpc_ids: z.string().array().optional(),
})

export type DataAwsSecurityGroupsInputProps =
  & z.input<typeof DataAwsSecurityGroupsInputSchema>
  & NodeProps

export type DataAwsSecurityGroupsOutputProps =
  & z.output<typeof DataAwsSecurityGroupsOutputSchema>
  & z.output<typeof DataAwsSecurityGroupsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/security_groups

export function DataAwsSecurityGroups(
  props: Partial<DataAwsSecurityGroupsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_security_groups'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSecurityGroupsInputSchema}
      _outputSchema={DataAwsSecurityGroupsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSecurityGroupss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSecurityGroupsOutputProps>(
    DataAwsSecurityGroups,
    idFilter,
    baseNode,
    optional,
  )
