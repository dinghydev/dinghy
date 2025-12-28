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
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_image_version

export function AwsSagemakerImageVersion(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsSagemakerImageVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsSagemakerImageVersion,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerImageVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSagemakerImageVersion,
    idFilter,
    baseNode,
    optional,
  )
