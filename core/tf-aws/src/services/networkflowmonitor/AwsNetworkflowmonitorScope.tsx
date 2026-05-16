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

export const AwsNetworkflowmonitorScopeInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target: resolvableValue(
    z.object({
      region: z.string(),
      target_identifier: z.object({
        target_type: z.string(),
        target_id: z.object({
          account_id: z.string(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsNetworkflowmonitorScopeOutputSchema = z.object({
  scope_arn: z.string().optional(),
  scope_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNetworkflowmonitorScopeInputProps =
  & z.input<typeof AwsNetworkflowmonitorScopeInputSchema>
  & NodeProps

export type AwsNetworkflowmonitorScopeOutputProps =
  & z.output<typeof AwsNetworkflowmonitorScopeOutputSchema>
  & z.output<typeof AwsNetworkflowmonitorScopeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkflowmonitor_scope

export function AwsNetworkflowmonitorScope(
  props: Partial<AwsNetworkflowmonitorScopeInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkflowmonitor_scope'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkflowmonitorScopeInputSchema}
      _outputSchema={AwsNetworkflowmonitorScopeOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkflowmonitorScope = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkflowmonitorScopeOutputProps>(
    AwsNetworkflowmonitorScope,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkflowmonitorScopes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkflowmonitorScopeOutputProps>(
    AwsNetworkflowmonitorScope,
    idFilter,
    baseNode,
    optional,
  )
