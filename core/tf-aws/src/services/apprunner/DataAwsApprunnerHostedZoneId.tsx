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

export const DataAwsApprunnerHostedZoneIdInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsApprunnerHostedZoneIdOutputSchema = z.object({
  id: z.string().optional(),
})

export type DataAwsApprunnerHostedZoneIdInputProps =
  & z.input<typeof DataAwsApprunnerHostedZoneIdInputSchema>
  & NodeProps

export type DataAwsApprunnerHostedZoneIdOutputProps =
  & z.output<typeof DataAwsApprunnerHostedZoneIdOutputSchema>
  & z.output<typeof DataAwsApprunnerHostedZoneIdInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/apprunner_hosted_zone_id

export function DataAwsApprunnerHostedZoneId(
  props: Partial<DataAwsApprunnerHostedZoneIdInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apprunner_hosted_zone_id'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsApprunnerHostedZoneIdInputSchema}
      _outputSchema={DataAwsApprunnerHostedZoneIdOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsApprunnerHostedZoneId = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsApprunnerHostedZoneIdOutputProps>(
    DataAwsApprunnerHostedZoneId,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsApprunnerHostedZoneIds = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsApprunnerHostedZoneIdOutputProps>(
    DataAwsApprunnerHostedZoneId,
    idFilter,
    baseNode,
    optional,
  )
