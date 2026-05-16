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

export const AwsSsoadminApplicationAssignmentConfigurationInputSchema =
  TfMetaSchema.extend({
    application_arn: resolvableValue(z.string()),
    assignment_required: resolvableValue(z.boolean()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsSsoadminApplicationAssignmentConfigurationOutputSchema = z
  .object({
    id: z.string().optional(),
  })

export const AwsSsoadminApplicationAssignmentConfigurationImportSchema = z
  .object({
    application_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export type AwsSsoadminApplicationAssignmentConfigurationInputProps =
  & z.input<typeof AwsSsoadminApplicationAssignmentConfigurationInputSchema>
  & z.input<typeof AwsSsoadminApplicationAssignmentConfigurationImportSchema>
  & NodeProps

export type AwsSsoadminApplicationAssignmentConfigurationOutputProps =
  & z.output<typeof AwsSsoadminApplicationAssignmentConfigurationOutputSchema>
  & z.output<typeof AwsSsoadminApplicationAssignmentConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssoadmin_application_assignment_configuration

export function AwsSsoadminApplicationAssignmentConfiguration(
  props: Partial<AwsSsoadminApplicationAssignmentConfigurationInputProps>,
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
      _inputSchema={AwsSsoadminApplicationAssignmentConfigurationInputSchema}
      _outputSchema={AwsSsoadminApplicationAssignmentConfigurationOutputSchema}
      _importSchema={AwsSsoadminApplicationAssignmentConfigurationImportSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminApplicationAssignmentConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsoadminApplicationAssignmentConfigurationOutputProps>(
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
  useTypedNodes<AwsSsoadminApplicationAssignmentConfigurationOutputProps>(
    AwsSsoadminApplicationAssignmentConfiguration,
    idFilter,
    baseNode,
    optional,
  )
