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

export const AwsMediaStoreContainerInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsMediaStoreContainerOutputSchema = z.object({
  arn: z.string().optional(),
  endpoint: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsMediaStoreContainerInputProps =
  & z.input<typeof AwsMediaStoreContainerInputSchema>
  & NodeProps

export type AwsMediaStoreContainerOutputProps =
  & z.output<typeof AwsMediaStoreContainerOutputSchema>
  & z.output<typeof AwsMediaStoreContainerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_store_container

export function AwsMediaStoreContainer(
  props: Partial<AwsMediaStoreContainerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_media_store_container'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMediaStoreContainerInputSchema}
      _outputSchema={AwsMediaStoreContainerOutputSchema}
      {...props}
    />
  )
}

export const useAwsMediaStoreContainer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMediaStoreContainerOutputProps>(
    AwsMediaStoreContainer,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMediaStoreContainers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMediaStoreContainerOutputProps>(
    AwsMediaStoreContainer,
    idFilter,
    baseNode,
    optional,
  )
