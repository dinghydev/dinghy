import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssoadmin_application_assignment

export const InputSchema = z.object({
  application_arn: resolvableValue(z.string()),
  principal_id: resolvableValue(z.string()),
  principal_type: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSsoadminApplicationAssignment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_application_assignment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminApplicationAssignment = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSsoadminApplicationAssignment, node, id)

export const useAwsSsoadminApplicationAssignments = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSsoadminApplicationAssignment, node, id)
