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

export const AwsGuarddutyPublishingDestinationInputSchema = TfMetaSchema.extend(
  {
    destination_arn: resolvableValue(z.string()),
    detector_id: resolvableValue(z.string()),
    kms_key_arn: resolvableValue(z.string()),
    destination_type: resolvableValue(z.string().optional()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  },
)

export const AwsGuarddutyPublishingDestinationOutputSchema = z.object({
  arn: z.string().optional(),
  destination_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsGuarddutyPublishingDestinationInputProps =
  & z.input<typeof AwsGuarddutyPublishingDestinationInputSchema>
  & NodeProps

export type AwsGuarddutyPublishingDestinationOutputProps =
  & z.output<typeof AwsGuarddutyPublishingDestinationOutputSchema>
  & z.output<typeof AwsGuarddutyPublishingDestinationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/guardduty_publishing_destination

export function AwsGuarddutyPublishingDestination(
  props: Partial<AwsGuarddutyPublishingDestinationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_publishing_destination'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGuarddutyPublishingDestinationInputSchema}
      _outputSchema={AwsGuarddutyPublishingDestinationOutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyPublishingDestination = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGuarddutyPublishingDestinationOutputProps>(
    AwsGuarddutyPublishingDestination,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGuarddutyPublishingDestinations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGuarddutyPublishingDestinationOutputProps>(
    AwsGuarddutyPublishingDestination,
    idFilter,
    baseNode,
    optional,
  )
