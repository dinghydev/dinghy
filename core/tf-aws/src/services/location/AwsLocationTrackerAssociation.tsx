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

export const AwsLocationTrackerAssociationInputSchema = TfMetaSchema.extend({
  consumer_arn: resolvableValue(z.string()),
  tracker_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsLocationTrackerAssociationOutputSchema = z.object({})

export type AwsLocationTrackerAssociationInputProps =
  & z.input<typeof AwsLocationTrackerAssociationInputSchema>
  & NodeProps

export type AwsLocationTrackerAssociationOutputProps =
  & z.output<typeof AwsLocationTrackerAssociationOutputSchema>
  & z.output<typeof AwsLocationTrackerAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/location_tracker_association

export function AwsLocationTrackerAssociation(
  props: Partial<AwsLocationTrackerAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_location_tracker_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLocationTrackerAssociationInputSchema}
      _outputSchema={AwsLocationTrackerAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsLocationTrackerAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLocationTrackerAssociationOutputProps>(
    AwsLocationTrackerAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLocationTrackerAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLocationTrackerAssociationOutputProps>(
    AwsLocationTrackerAssociation,
    idFilter,
    baseNode,
    optional,
  )
