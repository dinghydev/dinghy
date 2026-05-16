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

export const AwsEcrPullTimeUpdateExclusionInputSchema = TfMetaSchema.extend({
  principal_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEcrPullTimeUpdateExclusionOutputSchema = z.object({})

export type AwsEcrPullTimeUpdateExclusionInputProps =
  & z.input<typeof AwsEcrPullTimeUpdateExclusionInputSchema>
  & NodeProps

export type AwsEcrPullTimeUpdateExclusionOutputProps =
  & z.output<typeof AwsEcrPullTimeUpdateExclusionOutputSchema>
  & z.output<typeof AwsEcrPullTimeUpdateExclusionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ecr_pull_time_update_exclusion

export function AwsEcrPullTimeUpdateExclusion(
  props: Partial<AwsEcrPullTimeUpdateExclusionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_pull_time_update_exclusion'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEcrPullTimeUpdateExclusionInputSchema}
      _outputSchema={AwsEcrPullTimeUpdateExclusionOutputSchema}
      {...props}
    />
  )
}

export const useAwsEcrPullTimeUpdateExclusion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEcrPullTimeUpdateExclusionOutputProps>(
    AwsEcrPullTimeUpdateExclusion,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEcrPullTimeUpdateExclusions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEcrPullTimeUpdateExclusionOutputProps>(
    AwsEcrPullTimeUpdateExclusion,
    idFilter,
    baseNode,
    optional,
  )
