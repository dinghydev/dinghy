import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_studio_lifecycle_config

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  studio_lifecycle_config_app_type: resolvableValue(z.string()),
  studio_lifecycle_config_content: resolvableValue(z.string()),
  studio_lifecycle_config_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSagemakerStudioLifecycleConfig(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_studio_lifecycle_config'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerStudioLifecycleConfig = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSagemakerStudioLifecycleConfig, node, id)

export const useAwsSagemakerStudioLifecycleConfigs = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsSagemakerStudioLifecycleConfig, node, id)
