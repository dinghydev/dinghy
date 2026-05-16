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

export const AwsServicequotasTemplateAssociationInputSchema = TfMetaSchema
  .extend({
    region: resolvableValue(z.string().optional()),
    skip_destroy: resolvableValue(z.boolean().optional()),
  })

export const AwsServicequotasTemplateAssociationOutputSchema = z.object({
  id: z.string().optional(),
  status: z.string().optional(),
})

export type AwsServicequotasTemplateAssociationInputProps =
  & z.input<typeof AwsServicequotasTemplateAssociationInputSchema>
  & NodeProps

export type AwsServicequotasTemplateAssociationOutputProps =
  & z.output<typeof AwsServicequotasTemplateAssociationOutputSchema>
  & z.output<typeof AwsServicequotasTemplateAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicequotas_template_association

export function AwsServicequotasTemplateAssociation(
  props: Partial<AwsServicequotasTemplateAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicequotas_template_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicequotasTemplateAssociationInputSchema}
      _outputSchema={AwsServicequotasTemplateAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicequotasTemplateAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServicequotasTemplateAssociationOutputProps>(
    AwsServicequotasTemplateAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicequotasTemplateAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServicequotasTemplateAssociationOutputProps>(
    AwsServicequotasTemplateAssociation,
    idFilter,
    baseNode,
    optional,
  )
