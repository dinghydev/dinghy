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

export const AwsSecurityhubFindingAggregatorInputSchema = TfMetaSchema.extend({
  linking_mode: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  specified_regions: resolvableValue(z.string().array().optional()),
})

export const AwsSecurityhubFindingAggregatorOutputSchema = z.object({
  arn: z.string().optional(),
})

export const AwsSecurityhubFindingAggregatorImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsSecurityhubFindingAggregatorInputProps =
  & z.input<typeof AwsSecurityhubFindingAggregatorInputSchema>
  & z.input<typeof AwsSecurityhubFindingAggregatorImportSchema>
  & NodeProps

export type AwsSecurityhubFindingAggregatorOutputProps =
  & z.output<typeof AwsSecurityhubFindingAggregatorOutputSchema>
  & z.output<typeof AwsSecurityhubFindingAggregatorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securityhub_finding_aggregator

export function AwsSecurityhubFindingAggregator(
  props: Partial<AwsSecurityhubFindingAggregatorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_finding_aggregator'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecurityhubFindingAggregatorInputSchema}
      _outputSchema={AwsSecurityhubFindingAggregatorOutputSchema}
      _importSchema={AwsSecurityhubFindingAggregatorImportSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubFindingAggregator = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecurityhubFindingAggregatorOutputProps>(
    AwsSecurityhubFindingAggregator,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecurityhubFindingAggregators = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecurityhubFindingAggregatorOutputProps>(
    AwsSecurityhubFindingAggregator,
    idFilter,
    baseNode,
    optional,
  )
