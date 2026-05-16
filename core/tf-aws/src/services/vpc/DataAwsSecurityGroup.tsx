import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSecurityGroup } from './AwsSecurityGroup.tsx'

export const DataAwsSecurityGroupInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
  vpc_id: resolvableValue(z.string().optional()),
})

export const DataAwsSecurityGroupOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
})

export type DataAwsSecurityGroupInputProps =
  & z.input<typeof DataAwsSecurityGroupInputSchema>
  & NodeProps

export type DataAwsSecurityGroupOutputProps =
  & z.output<typeof DataAwsSecurityGroupOutputSchema>
  & z.output<typeof DataAwsSecurityGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/security_group

export function DataAwsSecurityGroup(
  props: Partial<DataAwsSecurityGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSecurityGroup
      _type='aws_security_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSecurityGroupInputSchema}
      _outputSchema={DataAwsSecurityGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSecurityGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSecurityGroupOutputProps>(
    DataAwsSecurityGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSecurityGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSecurityGroupOutputProps>(
    DataAwsSecurityGroup,
    idFilter,
    baseNode,
    optional,
  )
