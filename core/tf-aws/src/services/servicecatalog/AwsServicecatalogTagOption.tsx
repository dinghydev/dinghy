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

export const AwsServicecatalogTagOptionInputSchema = TfMetaSchema.extend({
  __key: resolvableValue(z.string()),
  value: resolvableValue(z.string()),
  active: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsServicecatalogTagOptionOutputSchema = z.object({
  id: z.string().optional(),
  owner: z.string().optional(),
})

export type AwsServicecatalogTagOptionInputProps =
  & z.input<typeof AwsServicecatalogTagOptionInputSchema>
  & NodeProps

export type AwsServicecatalogTagOptionOutputProps =
  & z.output<typeof AwsServicecatalogTagOptionOutputSchema>
  & z.output<typeof AwsServicecatalogTagOptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicecatalog_tag_option

export function AwsServicecatalogTagOption(
  props: Partial<AwsServicecatalogTagOptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_tag_option'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicecatalogTagOptionInputSchema}
      _outputSchema={AwsServicecatalogTagOptionOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogTagOption = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServicecatalogTagOptionOutputProps>(
    AwsServicecatalogTagOption,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicecatalogTagOptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServicecatalogTagOptionOutputProps>(
    AwsServicecatalogTagOption,
    idFilter,
    baseNode,
    optional,
  )
