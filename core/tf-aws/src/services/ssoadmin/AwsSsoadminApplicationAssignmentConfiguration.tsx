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

export const InputSchema = z.object({
  application_arn: resolvableValue(z.string()),
  assignment_required: resolvableValue(z.boolean()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export const ImportSchema = z.object({
  application_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ssoadmin_application_assignment_configuration

export function AwsSsoadminApplicationAssignmentConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_application_assignment_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminApplicationAssignmentConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsSsoadminApplicationAssignmentConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsoadminApplicationAssignmentConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSsoadminApplicationAssignmentConfiguration,
    idFilter,
    baseNode,
    optional,
  )
