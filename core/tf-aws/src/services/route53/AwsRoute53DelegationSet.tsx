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

export const AwsRoute53DelegationSetInputSchema = TfMetaSchema.extend({
  reference_name: resolvableValue(z.string().optional()),
})

export const AwsRoute53DelegationSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  name_servers: z.string().array().optional(),
})

export type AwsRoute53DelegationSetInputProps =
  & z.input<typeof AwsRoute53DelegationSetInputSchema>
  & NodeProps

export type AwsRoute53DelegationSetOutputProps =
  & z.output<typeof AwsRoute53DelegationSetOutputSchema>
  & z.output<typeof AwsRoute53DelegationSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_delegation_set

export function AwsRoute53DelegationSet(
  props: Partial<AwsRoute53DelegationSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_delegation_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53DelegationSetInputSchema}
      _outputSchema={AwsRoute53DelegationSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53DelegationSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53DelegationSetOutputProps>(
    AwsRoute53DelegationSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53DelegationSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53DelegationSetOutputProps>(
    AwsRoute53DelegationSet,
    idFilter,
    baseNode,
    optional,
  )
