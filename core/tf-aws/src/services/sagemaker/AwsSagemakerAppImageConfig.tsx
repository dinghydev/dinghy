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
  app_image_config_name: resolvableValue(z.string()),
  code_editor_app_image_config: resolvableValue(
    z.object({
      container_config: z.object({
        container_arguments: z.string().array().optional(),
        container_entrypoint: z.string().array().optional(),
        container_environment_variables: z.record(z.string(), z.string())
          .optional(),
      }).optional(),
      file_system_config: z.object({
        default_gid: z.number().optional(),
        default_uid: z.number().optional(),
        mount_path: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  jupyter_lab_image_config: resolvableValue(
    z.object({
      container_config: z.object({
        container_arguments: z.string().array().optional(),
        container_entrypoint: z.string().array().optional(),
        container_environment_variables: z.record(z.string(), z.string())
          .optional(),
      }).optional(),
      file_system_config: z.object({
        default_gid: z.number().optional(),
        default_uid: z.number().optional(),
        mount_path: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  kernel_gateway_image_config: resolvableValue(
    z.object({
      file_system_config: z.object({
        default_gid: z.number().optional(),
        default_uid: z.number().optional(),
        mount_path: z.string().optional(),
      }).optional(),
      kernel_spec: z.object({
        display_name: z.string().optional(),
        name: z.string(),
      }).array(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_app_image_config

export function AwsSagemakerAppImageConfig(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_app_image_config'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerAppImageConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsSagemakerAppImageConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerAppImageConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSagemakerAppImageConfig,
    idFilter,
    baseNode,
    optional,
  )
