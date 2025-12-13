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
  instance_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  additional_code_repositories: resolvableValue(z.string().array().optional()),
  default_code_repository: resolvableValue(z.string().optional()),
  direct_internet_access: resolvableValue(z.string().optional()),
  instance_metadata_service_configuration: resolvableValue(
    z.object({
      minimum_instance_metadata_service_version: z.string().optional(),
    }).optional(),
  ),
  kms_key_id: resolvableValue(z.string().optional()),
  lifecycle_config_name: resolvableValue(z.string().optional()),
  platform_identifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  root_access: resolvableValue(z.string().optional()),
  security_groups: resolvableValue(z.string().array().optional()),
  subnet_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  volume_size: resolvableValue(z.number().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  network_interface_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  url: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_notebook_instance

export function AwsSagemakerNotebookInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_notebook_instance'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerNotebookInstance = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsSagemakerNotebookInstance, idFilter, baseNode)

export const useAwsSagemakerNotebookInstances = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(AwsSagemakerNotebookInstance, idFilter, baseNode)
