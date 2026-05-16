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

export const AwsSsoadminPermissionSetInputSchema = TfMetaSchema.extend({
  instance_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  relay_state: resolvableValue(z.string().optional()),
  session_duration: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsSsoadminPermissionSetOutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSsoadminPermissionSetInputProps =
  & z.input<typeof AwsSsoadminPermissionSetInputSchema>
  & NodeProps

export type AwsSsoadminPermissionSetOutputProps =
  & z.output<typeof AwsSsoadminPermissionSetOutputSchema>
  & z.output<typeof AwsSsoadminPermissionSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssoadmin_permission_set

export function AwsSsoadminPermissionSet(
  props: Partial<AwsSsoadminPermissionSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_permission_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsoadminPermissionSetInputSchema}
      _outputSchema={AwsSsoadminPermissionSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminPermissionSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsoadminPermissionSetOutputProps>(
    AwsSsoadminPermissionSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsoadminPermissionSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsoadminPermissionSetOutputProps>(
    AwsSsoadminPermissionSet,
    idFilter,
    baseNode,
    optional,
  )
