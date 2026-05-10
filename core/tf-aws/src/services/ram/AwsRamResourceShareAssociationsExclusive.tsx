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

export const InputSchema = TfMetaSchema.extend({
  resource_share_arn: resolvableValue(z.string()),
  principals: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  resource_arns: resolvableValue(z.string().array().optional()),
  sources: resolvableValue(z.string().array().optional()),
})

export const OutputSchema = z.object({})

export const ImportSchema = z.object({
  resource_share_arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ram_resource_share_associations_exclusive

export function AwsRamResourceShareAssociationsExclusive(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ram_resource_share_associations_exclusive'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsRamResourceShareAssociationsExclusive = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsRamResourceShareAssociationsExclusive,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRamResourceShareAssociationsExclusives = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsRamResourceShareAssociationsExclusive,
    idFilter,
    baseNode,
    optional,
  )
