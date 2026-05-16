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

export const AwsSsoadminAccountAssignmentInputSchema = TfMetaSchema.extend({
  instance_arn: resolvableValue(z.string()),
  permission_set_arn: resolvableValue(z.string()),
  principal_id: resolvableValue(z.string()),
  principal_type: resolvableValue(z.string()),
  target_id: resolvableValue(z.string()),
  target_type: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsSsoadminAccountAssignmentOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsSsoadminAccountAssignmentImportSchema = z.object({
  instance_arn: resolvableValue(z.string()),
  permission_set_arn: resolvableValue(z.string()),
  principal_id: resolvableValue(z.string()),
  principal_type: resolvableValue(z.string()),
  target_id: resolvableValue(z.string()),
  target_type: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSsoadminAccountAssignmentInputProps =
  & z.input<typeof AwsSsoadminAccountAssignmentInputSchema>
  & z.input<typeof AwsSsoadminAccountAssignmentImportSchema>
  & NodeProps

export type AwsSsoadminAccountAssignmentOutputProps =
  & z.output<typeof AwsSsoadminAccountAssignmentOutputSchema>
  & z.output<typeof AwsSsoadminAccountAssignmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssoadmin_account_assignment

export function AwsSsoadminAccountAssignment(
  props: Partial<AwsSsoadminAccountAssignmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_account_assignment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsoadminAccountAssignmentInputSchema}
      _outputSchema={AwsSsoadminAccountAssignmentOutputSchema}
      _importSchema={AwsSsoadminAccountAssignmentImportSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminAccountAssignment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsoadminAccountAssignmentOutputProps>(
    AwsSsoadminAccountAssignment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsoadminAccountAssignments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsoadminAccountAssignmentOutputProps>(
    AwsSsoadminAccountAssignment,
    idFilter,
    baseNode,
    optional,
  )
