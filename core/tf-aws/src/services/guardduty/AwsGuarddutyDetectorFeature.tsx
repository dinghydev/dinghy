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

export const AwsGuarddutyDetectorFeatureInputSchema = TfMetaSchema.extend({
  detector_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  status: resolvableValue(z.string()),
  additional_configuration: resolvableValue(
    z.object({
      name: z.string(),
      status: z.string(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsGuarddutyDetectorFeatureOutputSchema = z.object({})

export type AwsGuarddutyDetectorFeatureInputProps =
  & z.input<typeof AwsGuarddutyDetectorFeatureInputSchema>
  & NodeProps

export type AwsGuarddutyDetectorFeatureOutputProps =
  & z.output<typeof AwsGuarddutyDetectorFeatureOutputSchema>
  & z.output<typeof AwsGuarddutyDetectorFeatureInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/guardduty_detector_feature

export function AwsGuarddutyDetectorFeature(
  props: Partial<AwsGuarddutyDetectorFeatureInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_detector_feature'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGuarddutyDetectorFeatureInputSchema}
      _outputSchema={AwsGuarddutyDetectorFeatureOutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyDetectorFeature = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGuarddutyDetectorFeatureOutputProps>(
    AwsGuarddutyDetectorFeature,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGuarddutyDetectorFeatures = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGuarddutyDetectorFeatureOutputProps>(
    AwsGuarddutyDetectorFeature,
    idFilter,
    baseNode,
    optional,
  )
