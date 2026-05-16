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

export const AwsSsoadminApplicationAccessScopeInputSchema = TfMetaSchema.extend(
  {
    application_arn: resolvableValue(z.string()),
    scope: resolvableValue(z.string()),
    authorized_targets: resolvableValue(z.string().array().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsSsoadminApplicationAccessScopeOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsSsoadminApplicationAccessScopeInputProps =
  & z.input<typeof AwsSsoadminApplicationAccessScopeInputSchema>
  & NodeProps

export type AwsSsoadminApplicationAccessScopeOutputProps =
  & z.output<typeof AwsSsoadminApplicationAccessScopeOutputSchema>
  & z.output<typeof AwsSsoadminApplicationAccessScopeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssoadmin_application_access_scope

export function AwsSsoadminApplicationAccessScope(
  props: Partial<AwsSsoadminApplicationAccessScopeInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_application_access_scope'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsoadminApplicationAccessScopeInputSchema}
      _outputSchema={AwsSsoadminApplicationAccessScopeOutputSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminApplicationAccessScope = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsoadminApplicationAccessScopeOutputProps>(
    AwsSsoadminApplicationAccessScope,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsoadminApplicationAccessScopes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsoadminApplicationAccessScopeOutputProps>(
    AwsSsoadminApplicationAccessScope,
    idFilter,
    baseNode,
    optional,
  )
