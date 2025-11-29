import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_hub

export const InputSchema = z.object({
  hub_description: resolvableValue(z.string()),
  hub_name: resolvableValue(z.string()),
  hub_display_name: resolvableValue(z.string().optional()),
  hub_search_keywords: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  s3_storage_config: resolvableValue(
    z.object({
      s3_output_path: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
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

export function AwsSagemakerHub(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_hub'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerHub = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSagemakerHub, node, id)

export const useAwsSagemakerHubs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSagemakerHub, node, id)
