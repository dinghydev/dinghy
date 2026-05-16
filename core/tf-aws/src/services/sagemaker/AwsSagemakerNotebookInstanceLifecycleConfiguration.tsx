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

export const AwsSagemakerNotebookInstanceLifecycleConfigurationInputSchema =
  TfMetaSchema.extend({
    id: resolvableValue(z.string().optional()),
    name: resolvableValue(z.string().optional()),
    on_create: resolvableValue(z.string().optional()),
    on_start: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsSagemakerNotebookInstanceLifecycleConfigurationOutputSchema = z
  .object({
    arn: z.string().optional(),
    tags_all: z.record(z.string(), z.string()).optional(),
  })

export type AwsSagemakerNotebookInstanceLifecycleConfigurationInputProps =
  & z.input<
    typeof AwsSagemakerNotebookInstanceLifecycleConfigurationInputSchema
  >
  & NodeProps

export type AwsSagemakerNotebookInstanceLifecycleConfigurationOutputProps =
  & z.output<
    typeof AwsSagemakerNotebookInstanceLifecycleConfigurationOutputSchema
  >
  & z.output<
    typeof AwsSagemakerNotebookInstanceLifecycleConfigurationInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration

export function AwsSagemakerNotebookInstanceLifecycleConfiguration(
  props: Partial<AwsSagemakerNotebookInstanceLifecycleConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_notebook_instance_lifecycle_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerNotebookInstanceLifecycleConfigurationInputSchema}
      _outputSchema={AwsSagemakerNotebookInstanceLifecycleConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerNotebookInstanceLifecycleConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerNotebookInstanceLifecycleConfigurationOutputProps>(
    AwsSagemakerNotebookInstanceLifecycleConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerNotebookInstanceLifecycleConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerNotebookInstanceLifecycleConfigurationOutputProps>(
    AwsSagemakerNotebookInstanceLifecycleConfiguration,
    idFilter,
    baseNode,
    optional,
  )
