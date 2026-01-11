import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsServicecatalogappregistryAttributeGroup } from './AwsServicecatalogappregistryAttributeGroup.tsx'

export const InputSchema = z.object({
  arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  attributes: z.string().optional(),
  description: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/servicecatalogappregistry_attribute_group

export function DataAwsServicecatalogappregistryAttributeGroup(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsServicecatalogappregistryAttributeGroup
      _type='aws_servicecatalogappregistry_attribute_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsServicecatalogappregistryAttributeGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsServicecatalogappregistryAttributeGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsServicecatalogappregistryAttributeGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsServicecatalogappregistryAttributeGroup,
    idFilter,
    baseNode,
    optional,
  )
