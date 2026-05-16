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

export const AwsSsmquicksetupConfigurationManagerInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    configuration_definition: resolvableValue(
      z.object({
        id: z.string().optional(),
        local_deployment_administration_role_arn: z.string().optional(),
        local_deployment_execution_role_name: z.string().optional(),
        parameters: z.record(z.string(), z.string()),
        type: z.string(),
        type_version: z.string().optional(),
      }).array().optional(),
    ),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsSsmquicksetupConfigurationManagerOutputSchema = z.object({
  manager_arn: z.string().optional(),
  status_summaries: z.object({
    status: z.string(),
    status_message: z.string(),
    status_type: z.string(),
  }).array().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSsmquicksetupConfigurationManagerInputProps =
  & z.input<typeof AwsSsmquicksetupConfigurationManagerInputSchema>
  & NodeProps

export type AwsSsmquicksetupConfigurationManagerOutputProps =
  & z.output<typeof AwsSsmquicksetupConfigurationManagerOutputSchema>
  & z.output<typeof AwsSsmquicksetupConfigurationManagerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssmquicksetup_configuration_manager

export function AwsSsmquicksetupConfigurationManager(
  props: Partial<AwsSsmquicksetupConfigurationManagerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssmquicksetup_configuration_manager'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsmquicksetupConfigurationManagerInputSchema}
      _outputSchema={AwsSsmquicksetupConfigurationManagerOutputSchema}
      {...props}
    />
  )
}

export const useAwsSsmquicksetupConfigurationManager = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsmquicksetupConfigurationManagerOutputProps>(
    AwsSsmquicksetupConfigurationManager,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmquicksetupConfigurationManagers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsmquicksetupConfigurationManagerOutputProps>(
    AwsSsmquicksetupConfigurationManager,
    idFilter,
    baseNode,
    optional,
  )
