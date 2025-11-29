import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsElasticacheSubnetGroup } from './AwsElasticacheSubnetGroup.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/elasticache_subnet_group

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  subnet_ids: z.string().array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsElasticacheSubnetGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsElasticacheSubnetGroup
      _type='aws_elasticache_subnet_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsElasticacheSubnetGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsElasticacheSubnetGroup, node, id)

export const useDataAwsElasticacheSubnetGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsElasticacheSubnetGroup, node, id)
