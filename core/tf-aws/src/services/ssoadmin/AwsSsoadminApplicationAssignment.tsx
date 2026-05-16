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

export const AwsSsoadminApplicationAssignmentInputSchema = TfMetaSchema.extend({
  application_arn: resolvableValue(z.string()),
  principal_id: resolvableValue(z.string()),
  principal_type: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSsoadminApplicationAssignmentOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsSsoadminApplicationAssignmentInputProps =
  & z.input<typeof AwsSsoadminApplicationAssignmentInputSchema>
  & NodeProps

export type AwsSsoadminApplicationAssignmentOutputProps =
  & z.output<typeof AwsSsoadminApplicationAssignmentOutputSchema>
  & z.output<typeof AwsSsoadminApplicationAssignmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssoadmin_application_assignment

export function AwsSsoadminApplicationAssignment(
  props: Partial<AwsSsoadminApplicationAssignmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_application_assignment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsoadminApplicationAssignmentInputSchema}
      _outputSchema={AwsSsoadminApplicationAssignmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminApplicationAssignment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsoadminApplicationAssignmentOutputProps>(
    AwsSsoadminApplicationAssignment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsoadminApplicationAssignments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsoadminApplicationAssignmentOutputProps>(
    AwsSsoadminApplicationAssignment,
    idFilter,
    baseNode,
    optional,
  )
