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

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/guardduty_member_detector_feature

export function AwsGuarddutyMemberDetectorFeature(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_member_detector_feature'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyMemberDetectorFeature = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsGuarddutyMemberDetectorFeature,
    idFilter,
    baseNode,
    optional,
  )
