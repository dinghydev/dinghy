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

export const AwsSagemakerStudioLifecycleConfigInputSchema = TfMetaSchema.extend(
  {
    studio_lifecycle_config_app_type: resolvableValue(z.string()),
    studio_lifecycle_config_content: resolvableValue(z.string()),
    studio_lifecycle_config_name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  },
)

export const AwsSagemakerStudioLifecycleConfigOutputSchema = z.object({
  arn: z.string().optional(),
})

export type AwsSagemakerStudioLifecycleConfigInputProps =
  & z.input<typeof AwsSagemakerStudioLifecycleConfigInputSchema>
  & NodeProps

export type AwsSagemakerStudioLifecycleConfigOutputProps =
  & z.output<typeof AwsSagemakerStudioLifecycleConfigOutputSchema>
  & z.output<typeof AwsSagemakerStudioLifecycleConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_studio_lifecycle_config

export function AwsSagemakerStudioLifecycleConfig(
  props: Partial<AwsSagemakerStudioLifecycleConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_studio_lifecycle_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerStudioLifecycleConfigInputSchema}
      _outputSchema={AwsSagemakerStudioLifecycleConfigOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerStudioLifecycleConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerStudioLifecycleConfigOutputProps>(
    AwsSagemakerStudioLifecycleConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerStudioLifecycleConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerStudioLifecycleConfigOutputProps>(
    AwsSagemakerStudioLifecycleConfig,
    idFilter,
    baseNode,
    optional,
  )
