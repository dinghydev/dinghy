import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsUxcAccountCustomizationsInputSchema = TfMetaSchema.extend({
  account_color: resolvableValue(z.string().optional()),
  visible_regions: resolvableValue(z.string().array().optional()),
  visible_services: resolvableValue(z.string().array().optional()),
})

export const AwsUxcAccountCustomizationsOutputSchema = z.object({})

export type AwsUxcAccountCustomizationsInputProps =
  & z.input<typeof AwsUxcAccountCustomizationsInputSchema>
  & NodeProps

export type AwsUxcAccountCustomizationsOutputProps =
  & z.output<typeof AwsUxcAccountCustomizationsOutputSchema>
  & z.output<typeof AwsUxcAccountCustomizationsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/uxc_account_customizations

export function AwsUxcAccountCustomizations(
  props: Partial<AwsUxcAccountCustomizationsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_uxc_account_customizations'
      _category='resource'
      _title={_title}
      _inputSchema={AwsUxcAccountCustomizationsInputSchema}
      _outputSchema={AwsUxcAccountCustomizationsOutputSchema}
      {...props}
    />
  )
}

export const useAwsUxcAccountCustomizationss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsUxcAccountCustomizationsOutputProps>(
    AwsUxcAccountCustomizations,
    idFilter,
    baseNode,
    optional,
  )
