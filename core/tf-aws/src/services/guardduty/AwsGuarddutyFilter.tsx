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

export const AwsGuarddutyFilterInputSchema = TfMetaSchema.extend({
  action: resolvableValue(z.string()),
  detector_id: resolvableValue(z.string()),
  finding_criteria: resolvableValue(z.object({
    criterion: z.object({
      equals: z.string().array().optional(),
      field: z.string(),
      greater_than: z.string().optional(),
      greater_than_or_equal: z.string().optional(),
      less_than: z.string().optional(),
      less_than_or_equal: z.string().optional(),
      matches: z.string().array().optional(),
      not_equals: z.string().array().optional(),
      not_matches: z.string().array().optional(),
    }).array(),
  })),
  name: resolvableValue(z.string()),
  rank: resolvableValue(z.number()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsGuarddutyFilterOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsGuarddutyFilterInputProps =
  & z.input<typeof AwsGuarddutyFilterInputSchema>
  & NodeProps

export type AwsGuarddutyFilterOutputProps =
  & z.output<typeof AwsGuarddutyFilterOutputSchema>
  & z.output<typeof AwsGuarddutyFilterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/guardduty_filter

export function AwsGuarddutyFilter(
  props: Partial<AwsGuarddutyFilterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_filter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGuarddutyFilterInputSchema}
      _outputSchema={AwsGuarddutyFilterOutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyFilter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGuarddutyFilterOutputProps>(
    AwsGuarddutyFilter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGuarddutyFilters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGuarddutyFilterOutputProps>(
    AwsGuarddutyFilter,
    idFilter,
    baseNode,
    optional,
  )
