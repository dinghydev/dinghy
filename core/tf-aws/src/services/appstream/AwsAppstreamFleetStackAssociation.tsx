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

export const AwsAppstreamFleetStackAssociationInputSchema = TfMetaSchema.extend(
  {
    fleet_name: resolvableValue(z.string()),
    stack_name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsAppstreamFleetStackAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsAppstreamFleetStackAssociationInputProps =
  & z.input<typeof AwsAppstreamFleetStackAssociationInputSchema>
  & NodeProps

export type AwsAppstreamFleetStackAssociationOutputProps =
  & z.output<typeof AwsAppstreamFleetStackAssociationOutputSchema>
  & z.output<typeof AwsAppstreamFleetStackAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appstream_fleet_stack_association

export function AwsAppstreamFleetStackAssociation(
  props: Partial<AwsAppstreamFleetStackAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appstream_fleet_stack_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppstreamFleetStackAssociationInputSchema}
      _outputSchema={AwsAppstreamFleetStackAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppstreamFleetStackAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppstreamFleetStackAssociationOutputProps>(
    AwsAppstreamFleetStackAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppstreamFleetStackAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppstreamFleetStackAssociationOutputProps>(
    AwsAppstreamFleetStackAssociation,
    idFilter,
    baseNode,
    optional,
  )
