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

export const InputSchema = TfMetaSchema.extend({
  domain_id: resolvableValue(z.string()),
  enabled_regions: resolvableValue(z.string().array()),
  environment_blueprint_id: resolvableValue(z.string()),
  manage_access_role_arn: resolvableValue(z.string().optional()),
  provisioning_role_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  regional_parameters: resolvableValue(
    z.record(z.string(), z.record(z.string(), z.string())).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/datazone_environment_blueprint_configuration

export function AwsDatazoneEnvironmentBlueprintConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_environment_blueprint_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDatazoneEnvironmentBlueprintConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsDatazoneEnvironmentBlueprintConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatazoneEnvironmentBlueprintConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDatazoneEnvironmentBlueprintConfiguration,
    idFilter,
    baseNode,
    optional,
  )
