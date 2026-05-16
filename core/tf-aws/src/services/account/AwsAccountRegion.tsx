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

export const AwsAccountRegionInputSchema = TfMetaSchema.extend({
  enabled: resolvableValue(z.boolean()),
  region_name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsAccountRegionOutputSchema = z.object({
  opt_status: z.string().optional(),
})

export type AwsAccountRegionInputProps =
  & z.input<typeof AwsAccountRegionInputSchema>
  & NodeProps

export type AwsAccountRegionOutputProps =
  & z.output<typeof AwsAccountRegionOutputSchema>
  & z.output<typeof AwsAccountRegionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/account_region

export function AwsAccountRegion(props: Partial<AwsAccountRegionInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_account_region'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAccountRegionInputSchema}
      _outputSchema={AwsAccountRegionOutputSchema}
      {...props}
    />
  )
}

export const useAwsAccountRegion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAccountRegionOutputProps>(
    AwsAccountRegion,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAccountRegions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAccountRegionOutputProps>(
    AwsAccountRegion,
    idFilter,
    baseNode,
    optional,
  )
