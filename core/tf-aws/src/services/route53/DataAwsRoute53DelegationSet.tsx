import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRoute53DelegationSet } from './AwsRoute53DelegationSet.tsx'

export const DataAwsRoute53DelegationSetInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string()),
})

export const DataAwsRoute53DelegationSetOutputSchema = z.object({
  arn: z.string().optional(),
  caller_reference: z.string().optional(),
  name_servers: z.string().array().optional(),
})

export type DataAwsRoute53DelegationSetInputProps =
  & z.input<typeof DataAwsRoute53DelegationSetInputSchema>
  & NodeProps

export type DataAwsRoute53DelegationSetOutputProps =
  & z.output<typeof DataAwsRoute53DelegationSetOutputSchema>
  & z.output<typeof DataAwsRoute53DelegationSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/route53_delegation_set

export function DataAwsRoute53DelegationSet(
  props: Partial<DataAwsRoute53DelegationSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsRoute53DelegationSet
      _type='aws_route53_delegation_set'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRoute53DelegationSetInputSchema}
      _outputSchema={DataAwsRoute53DelegationSetOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRoute53DelegationSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsRoute53DelegationSetOutputProps>(
    DataAwsRoute53DelegationSet,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRoute53DelegationSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRoute53DelegationSetOutputProps>(
    DataAwsRoute53DelegationSet,
    idFilter,
    baseNode,
    optional,
  )
