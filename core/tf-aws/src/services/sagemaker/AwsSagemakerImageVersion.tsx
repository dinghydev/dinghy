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

export const AwsSagemakerImageVersionInputSchema = TfMetaSchema.extend({
  base_image: resolvableValue(z.string()),
  image_name: resolvableValue(z.string()),
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

export const AwsSagemakerImageVersionOutputSchema = z.object({
  arn: z.string().optional(),
  container_image: z.string().optional(),
  image_arn: z.string().optional(),
  version: z.number().optional(),
})

export type AwsSagemakerImageVersionInputProps =
  & z.input<typeof AwsSagemakerImageVersionInputSchema>
  & NodeProps

export type AwsSagemakerImageVersionOutputProps =
  & z.output<typeof AwsSagemakerImageVersionOutputSchema>
  & z.output<typeof AwsSagemakerImageVersionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version

export function AwsSagemakerImageVersion(
  props: Partial<AwsSagemakerImageVersionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_image_version'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerImageVersionInputSchema}
      _outputSchema={AwsSagemakerImageVersionOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerImageVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerImageVersionOutputProps>(
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
  useTypedNodes<AwsSagemakerImageVersionOutputProps>(
    AwsSagemakerImageVersion,
    idFilter,
    baseNode,
    optional,
  )
