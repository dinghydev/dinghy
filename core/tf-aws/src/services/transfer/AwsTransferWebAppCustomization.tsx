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

export const AwsTransferWebAppCustomizationInputSchema = TfMetaSchema.extend({
  web_app_id: resolvableValue(z.string()),
  favicon_file: resolvableValue(z.string().optional()),
  logo_file: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  title: resolvableValue(z.string().optional()),
})

export const AwsTransferWebAppCustomizationOutputSchema = z.object({})

export type AwsTransferWebAppCustomizationInputProps =
  & z.input<typeof AwsTransferWebAppCustomizationInputSchema>
  & NodeProps

export type AwsTransferWebAppCustomizationOutputProps =
  & z.output<typeof AwsTransferWebAppCustomizationOutputSchema>
  & z.output<typeof AwsTransferWebAppCustomizationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_web_app_customization

export function AwsTransferWebAppCustomization(
  props: Partial<AwsTransferWebAppCustomizationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_web_app_customization'
      _category='resource'
      _title={_title}
      _inputSchema={AwsTransferWebAppCustomizationInputSchema}
      _outputSchema={AwsTransferWebAppCustomizationOutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferWebAppCustomization = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsTransferWebAppCustomizationOutputProps>(
    AwsTransferWebAppCustomization,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTransferWebAppCustomizations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsTransferWebAppCustomizationOutputProps>(
    AwsTransferWebAppCustomization,
    idFilter,
    baseNode,
    optional,
  )
