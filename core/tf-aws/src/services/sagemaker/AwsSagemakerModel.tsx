import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_model

export const InputSchema = z.object({
  execution_role_arn: resolvableValue(z.string()),
  container: resolvableValue(
    z.object({
      container_hostname: z.string().optional(),
      environment: z.record(z.string(), z.string()).optional(),
      image: z.string().optional(),
      inference_specification_name: z.string().optional(),
      mode: z.string().optional(),
      model_data_url: z.string().optional(),
      model_package_name: z.string().optional(),
    }).optional(),
  ),
  enable_network_isolation: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  inference_execution_config: resolvableValue(
    z.object({
      mode: z.string(),
    }).optional(),
  ),
  primary_container: resolvableValue(
    z.object({
      container_hostname: z.string().optional(),
      environment: z.record(z.string(), z.string()).optional(),
      image: z.string().optional(),
      inference_specification_name: z.string().optional(),
      mode: z.string().optional(),
      model_data_url: z.string().optional(),
      model_package_name: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  vpc_config: resolvableValue(
    z.object({
      security_group_ids: z.string().array(),
      subnets: z.string().array(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSagemakerModel(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_model'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerModel = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSagemakerModel, node, id)

export const useAwsSagemakerModels = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSagemakerModel, node, id)
