import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsVpcSecurityGroupRulesInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const DataAwsVpcSecurityGroupRulesOutputSchema = z.object({
  id: z.string().optional(),
  ids: z.string().array().optional(),
})

export type DataAwsVpcSecurityGroupRulesInputProps =
  & z.input<typeof DataAwsVpcSecurityGroupRulesInputSchema>
  & NodeProps

export type DataAwsVpcSecurityGroupRulesOutputProps =
  & z.output<typeof DataAwsVpcSecurityGroupRulesOutputSchema>
  & z.output<typeof DataAwsVpcSecurityGroupRulesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/vpc_security_group_rules

export function DataAwsVpcSecurityGroupRules(
  props: Partial<DataAwsVpcSecurityGroupRulesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_security_group_rules'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsVpcSecurityGroupRulesInputSchema}
      _outputSchema={DataAwsVpcSecurityGroupRulesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsVpcSecurityGroupRuless = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsVpcSecurityGroupRulesOutputProps>(
    DataAwsVpcSecurityGroupRules,
    idFilter,
    baseNode,
    optional,
  )
