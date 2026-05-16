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

export const AwsSyntheticsGroupAssociationInputSchema = TfMetaSchema.extend({
  canary_arn: resolvableValue(z.string()),
  group_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSyntheticsGroupAssociationOutputSchema = z.object({
  group_arn: z.string().optional(),
  group_id: z.string().optional(),
  group_name: z.string().optional(),
})

export type AwsSyntheticsGroupAssociationInputProps =
  & z.input<typeof AwsSyntheticsGroupAssociationInputSchema>
  & NodeProps

export type AwsSyntheticsGroupAssociationOutputProps =
  & z.output<typeof AwsSyntheticsGroupAssociationOutputSchema>
  & z.output<typeof AwsSyntheticsGroupAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/synthetics_group_association

export function AwsSyntheticsGroupAssociation(
  props: Partial<AwsSyntheticsGroupAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_synthetics_group_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSyntheticsGroupAssociationInputSchema}
      _outputSchema={AwsSyntheticsGroupAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsSyntheticsGroupAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSyntheticsGroupAssociationOutputProps>(
    AwsSyntheticsGroupAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSyntheticsGroupAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSyntheticsGroupAssociationOutputProps>(
    AwsSyntheticsGroupAssociation,
    idFilter,
    baseNode,
    optional,
  )
