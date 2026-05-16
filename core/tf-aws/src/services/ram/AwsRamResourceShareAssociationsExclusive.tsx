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

export const AwsRamResourceShareAssociationsExclusiveInputSchema = TfMetaSchema
  .extend({
    resource_share_arn: resolvableValue(z.string()),
    principals: resolvableValue(z.string().array().optional()),
    region: resolvableValue(z.string().optional()),
    resource_arns: resolvableValue(z.string().array().optional()),
    sources: resolvableValue(z.string().array().optional()),
  })

export const AwsRamResourceShareAssociationsExclusiveOutputSchema = z.object({})

export const AwsRamResourceShareAssociationsExclusiveImportSchema = z.object({
  resource_share_arn: resolvableValue(z.string()),
})

export type AwsRamResourceShareAssociationsExclusiveInputProps =
  & z.input<typeof AwsRamResourceShareAssociationsExclusiveInputSchema>
  & z.input<typeof AwsRamResourceShareAssociationsExclusiveImportSchema>
  & NodeProps

export type AwsRamResourceShareAssociationsExclusiveOutputProps =
  & z.output<typeof AwsRamResourceShareAssociationsExclusiveOutputSchema>
  & z.output<typeof AwsRamResourceShareAssociationsExclusiveInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ram_resource_share_associations_exclusive

export function AwsRamResourceShareAssociationsExclusive(
  props: Partial<AwsRamResourceShareAssociationsExclusiveInputProps>,
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
      _inputSchema={AwsRamResourceShareAssociationsExclusiveInputSchema}
      _outputSchema={AwsRamResourceShareAssociationsExclusiveOutputSchema}
      _importSchema={AwsRamResourceShareAssociationsExclusiveImportSchema}
      {...props}
    />
  )
}

export const useAwsRamResourceShareAssociationsExclusive = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRamResourceShareAssociationsExclusiveOutputProps>(
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
  useTypedNodes<AwsRamResourceShareAssociationsExclusiveOutputProps>(
    AwsRamResourceShareAssociationsExclusive,
    idFilter,
    baseNode,
    optional,
  )
