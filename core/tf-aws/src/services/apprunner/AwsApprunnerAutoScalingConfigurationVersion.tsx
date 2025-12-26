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
  auto_scaling_configuration_name: resolvableValue(z.string()),
  has_associated_service: resolvableValue(z.boolean()),
  is_default: resolvableValue(z.boolean()),
  id: resolvableValue(z.string().optional()),
  max_concurrency: resolvableValue(z.number().optional()),
  max_size: resolvableValue(z.number().optional()),
  min_size: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  auto_scaling_configuration_revision: z.number().optional(),
  latest: z.boolean().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/apprunner_auto_scaling_configuration_version

export function AwsApprunnerAutoScalingConfigurationVersion(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apprunner_auto_scaling_configuration_version'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsApprunnerAutoScalingConfigurationVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsApprunnerAutoScalingConfigurationVersion,
    idFilter,
    baseNode,
    optional,
  )
