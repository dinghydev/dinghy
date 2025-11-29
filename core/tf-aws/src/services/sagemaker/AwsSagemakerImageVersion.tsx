import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_image_version

export const InputSchema = z.object({
  base_image: resolvableValue(z.string()),
  image_arn: resolvableValue(z.string()),
  image_name: resolvableValue(z.string()),
  version: resolvableValue(z.number()),
  aliases: resolvableValue(z.string().array().optional()),
  horovod: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  job_type: resolvableValue(z.string().optional()),
  ml_framework: resolvableValue(z.string().optional()),
  processor: resolvableValue(z.string().optional()),
  programming_lang: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  release_notes: resolvableValue(z.string().optional()),
  vendor_guidance: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  container_image: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSagemakerImageVersion(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_image_version'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerImageVersion = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSagemakerImageVersion, node, id)

export const useAwsSagemakerImageVersions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSagemakerImageVersion, node, id)
