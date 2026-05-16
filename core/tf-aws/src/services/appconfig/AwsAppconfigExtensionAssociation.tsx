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

export const AwsAppconfigExtensionAssociationInputSchema = TfMetaSchema.extend({
  extension_arn: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsAppconfigExtensionAssociationOutputSchema = z.object({
  arn: z.string().optional(),
  extension_version: z.number().optional(),
  id: z.string().optional(),
})

export type AwsAppconfigExtensionAssociationInputProps =
  & z.input<typeof AwsAppconfigExtensionAssociationInputSchema>
  & NodeProps

export type AwsAppconfigExtensionAssociationOutputProps =
  & z.output<typeof AwsAppconfigExtensionAssociationOutputSchema>
  & z.output<typeof AwsAppconfigExtensionAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appconfig_extension_association

export function AwsAppconfigExtensionAssociation(
  props: Partial<AwsAppconfigExtensionAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appconfig_extension_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppconfigExtensionAssociationInputSchema}
      _outputSchema={AwsAppconfigExtensionAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppconfigExtensionAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppconfigExtensionAssociationOutputProps>(
    AwsAppconfigExtensionAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppconfigExtensionAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppconfigExtensionAssociationOutputProps>(
    AwsAppconfigExtensionAssociation,
    idFilter,
    baseNode,
    optional,
  )
