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

export const AwsConfigAggregateAuthorizationInputSchema = TfMetaSchema.extend({
  account_id: resolvableValue(z.string()),
  authorized_aws_region: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsConfigAggregateAuthorizationOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsConfigAggregateAuthorizationInputProps =
  & z.input<typeof AwsConfigAggregateAuthorizationInputSchema>
  & NodeProps

export type AwsConfigAggregateAuthorizationOutputProps =
  & z.output<typeof AwsConfigAggregateAuthorizationOutputSchema>
  & z.output<typeof AwsConfigAggregateAuthorizationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/config_aggregate_authorization

export function AwsConfigAggregateAuthorization(
  props: Partial<AwsConfigAggregateAuthorizationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_aggregate_authorization'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConfigAggregateAuthorizationInputSchema}
      _outputSchema={AwsConfigAggregateAuthorizationOutputSchema}
      {...props}
    />
  )
}

export const useAwsConfigAggregateAuthorization = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConfigAggregateAuthorizationOutputProps>(
    AwsConfigAggregateAuthorization,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConfigAggregateAuthorizations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConfigAggregateAuthorizationOutputProps>(
    AwsConfigAggregateAuthorization,
    idFilter,
    baseNode,
    optional,
  )
