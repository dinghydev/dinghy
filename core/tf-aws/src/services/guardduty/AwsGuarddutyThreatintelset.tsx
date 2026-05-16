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

export const AwsGuarddutyThreatintelsetInputSchema = TfMetaSchema.extend({
  activate: resolvableValue(z.boolean()),
  detector_id: resolvableValue(z.string()),
  format: resolvableValue(z.string()),
  location: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsGuarddutyThreatintelsetOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  threat_intel_set_id: z.string().optional(),
})

export type AwsGuarddutyThreatintelsetInputProps =
  & z.input<typeof AwsGuarddutyThreatintelsetInputSchema>
  & NodeProps

export type AwsGuarddutyThreatintelsetOutputProps =
  & z.output<typeof AwsGuarddutyThreatintelsetOutputSchema>
  & z.output<typeof AwsGuarddutyThreatintelsetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/guardduty_threatintelset

export function AwsGuarddutyThreatintelset(
  props: Partial<AwsGuarddutyThreatintelsetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_threatintelset'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGuarddutyThreatintelsetInputSchema}
      _outputSchema={AwsGuarddutyThreatintelsetOutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyThreatintelset = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGuarddutyThreatintelsetOutputProps>(
    AwsGuarddutyThreatintelset,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGuarddutyThreatintelsets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGuarddutyThreatintelsetOutputProps>(
    AwsGuarddutyThreatintelset,
    idFilter,
    baseNode,
    optional,
  )
