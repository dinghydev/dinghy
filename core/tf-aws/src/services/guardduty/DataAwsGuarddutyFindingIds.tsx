import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsGuarddutyFindingIdsInputSchema = TfMetaSchema.extend({
  detector_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsGuarddutyFindingIdsOutputSchema = z.object({
  finding_ids: z.string().array().optional(),
  has_findings: z.boolean().optional(),
  id: z.string().optional(),
})

export type DataAwsGuarddutyFindingIdsInputProps =
  & z.input<typeof DataAwsGuarddutyFindingIdsInputSchema>
  & NodeProps

export type DataAwsGuarddutyFindingIdsOutputProps =
  & z.output<typeof DataAwsGuarddutyFindingIdsOutputSchema>
  & z.output<typeof DataAwsGuarddutyFindingIdsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/guardduty_finding_ids

export function DataAwsGuarddutyFindingIds(
  props: Partial<DataAwsGuarddutyFindingIdsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_finding_ids'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsGuarddutyFindingIdsInputSchema}
      _outputSchema={DataAwsGuarddutyFindingIdsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsGuarddutyFindingIdss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsGuarddutyFindingIdsOutputProps>(
    DataAwsGuarddutyFindingIds,
    idFilter,
    baseNode,
    optional,
  )
