import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/sagemaker_prebuilt_ecr_image

export const InputSchema = z.object({
  repository_name: resolvableValue(z.string()),
  dns_suffix: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  image_tag: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  registry_id: z.string().optional(),
  registry_path: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSagemakerPrebuiltEcrImage(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_prebuilt_ecr_image'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSagemakerPrebuiltEcrImage = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsSagemakerPrebuiltEcrImage, node, id)

export const useDataAwsSagemakerPrebuiltEcrImages = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsSagemakerPrebuiltEcrImage, node, id)
