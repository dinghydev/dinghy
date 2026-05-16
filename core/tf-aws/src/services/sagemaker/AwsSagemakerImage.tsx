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

export const AwsSagemakerImageInputSchema = TfMetaSchema.extend({
  image_name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  display_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSagemakerImageOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSagemakerImageInputProps =
  & z.input<typeof AwsSagemakerImageInputSchema>
  & NodeProps

export type AwsSagemakerImageOutputProps =
  & z.output<typeof AwsSagemakerImageOutputSchema>
  & z.output<typeof AwsSagemakerImageInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image

export function AwsSagemakerImage(props: Partial<AwsSagemakerImageInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_image'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerImageInputSchema}
      _outputSchema={AwsSagemakerImageOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerImage = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerImageOutputProps>(
    AwsSagemakerImage,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerImages = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerImageOutputProps>(
    AwsSagemakerImage,
    idFilter,
    baseNode,
    optional,
  )
