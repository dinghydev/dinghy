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

export const AwsGuarddutyMemberDetectorFeatureInputSchema = TfMetaSchema.extend(
  {
    account_id: resolvableValue(z.string()),
    detector_id: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    status: resolvableValue(z.string()),
    additional_configuration: resolvableValue(
      z.object({
        name: z.string(),
        status: z.string(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsGuarddutyMemberDetectorFeatureOutputSchema = z.object({})

export type AwsGuarddutyMemberDetectorFeatureInputProps =
  & z.input<typeof AwsGuarddutyMemberDetectorFeatureInputSchema>
  & NodeProps

export type AwsGuarddutyMemberDetectorFeatureOutputProps =
  & z.output<typeof AwsGuarddutyMemberDetectorFeatureOutputSchema>
  & z.output<typeof AwsGuarddutyMemberDetectorFeatureInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/guardduty_member_detector_feature

export function AwsGuarddutyMemberDetectorFeature(
  props: Partial<AwsGuarddutyMemberDetectorFeatureInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_member_detector_feature'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGuarddutyMemberDetectorFeatureInputSchema}
      _outputSchema={AwsGuarddutyMemberDetectorFeatureOutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyMemberDetectorFeature = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGuarddutyMemberDetectorFeatureOutputProps>(
    AwsGuarddutyMemberDetectorFeature,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGuarddutyMemberDetectorFeatures = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGuarddutyMemberDetectorFeatureOutputProps>(
    AwsGuarddutyMemberDetectorFeature,
    idFilter,
    baseNode,
    optional,
  )
