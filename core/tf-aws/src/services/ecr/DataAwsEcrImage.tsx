import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ecr_image

export const InputSchema = z.object({
  repository_name: resolvableValue(z.string()),
  image_digest: resolvableValue(z.string().optional()),
  image_tag: resolvableValue(z.string().optional()),
  most_recent: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  registry_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  image_pushed_at: z.number().optional(),
  image_size_in_bytes: z.number().optional(),
  image_tags: z.string().array().optional(),
  image_uri: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEcrImage(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_image'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEcrImage = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsEcrImage, node, id)

export const useDataAwsEcrImages = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsEcrImage, node, id)
