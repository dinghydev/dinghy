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

export const AwsApprunnerAutoScalingConfigurationVersionInputSchema =
  TfMetaSchema.extend({
    auto_scaling_configuration_name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    max_concurrency: resolvableValue(z.number().optional()),
    max_size: resolvableValue(z.number().optional()),
    min_size: resolvableValue(z.number().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsApprunnerAutoScalingConfigurationVersionOutputSchema = z.object(
  {
    arn: z.string().optional(),
    auto_scaling_configuration_revision: z.number().optional(),
    has_associated_service: z.boolean().optional(),
    is_default: z.boolean().optional(),
    latest: z.boolean().optional(),
    status: z.string().optional(),
    tags_all: z.record(z.string(), z.string()).optional(),
  },
)

export const AwsApprunnerAutoScalingConfigurationVersionImportSchema = z.object(
  {
    arn: resolvableValue(z.string()),
  },
)

export type AwsApprunnerAutoScalingConfigurationVersionInputProps =
  & z.input<typeof AwsApprunnerAutoScalingConfigurationVersionInputSchema>
  & z.input<typeof AwsApprunnerAutoScalingConfigurationVersionImportSchema>
  & NodeProps

export type AwsApprunnerAutoScalingConfigurationVersionOutputProps =
  & z.output<typeof AwsApprunnerAutoScalingConfigurationVersionOutputSchema>
  & z.output<typeof AwsApprunnerAutoScalingConfigurationVersionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apprunner_auto_scaling_configuration_version

export function AwsApprunnerAutoScalingConfigurationVersion(
  props: Partial<AwsApprunnerAutoScalingConfigurationVersionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apprunner_auto_scaling_configuration_version'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApprunnerAutoScalingConfigurationVersionInputSchema}
      _outputSchema={AwsApprunnerAutoScalingConfigurationVersionOutputSchema}
      _importSchema={AwsApprunnerAutoScalingConfigurationVersionImportSchema}
      {...props}
    />
  )
}

export const useAwsApprunnerAutoScalingConfigurationVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApprunnerAutoScalingConfigurationVersionOutputProps>(
    AwsApprunnerAutoScalingConfigurationVersion,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApprunnerAutoScalingConfigurationVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApprunnerAutoScalingConfigurationVersionOutputProps>(
    AwsApprunnerAutoScalingConfigurationVersion,
    idFilter,
    baseNode,
    optional,
  )
