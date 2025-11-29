import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_app

export const InputSchema = z.object({
  app_name: resolvableValue(z.string()),
  app_type: resolvableValue(z.string()),
  domain_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  resource_spec: resolvableValue(
    z.object({
      instance_type: z.string().optional(),
      lifecycle_config_arn: z.string().optional(),
      sagemaker_image_arn: z.string().optional(),
      sagemaker_image_version_alias: z.string().optional(),
      sagemaker_image_version_arn: z.string().optional(),
    }).optional(),
  ),
  space_name: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  user_profile_name: resolvableValue(z.string().optional()),
})

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

export function AwsSagemakerApp(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_app'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerApp = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSagemakerApp, node, id)

export const useAwsSagemakerApps = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSagemakerApp, node, id)
