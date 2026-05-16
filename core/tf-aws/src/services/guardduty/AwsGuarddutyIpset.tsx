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

export const AwsGuarddutyIpsetInputSchema = TfMetaSchema.extend({
  activate: resolvableValue(z.boolean()),
  detector_id: resolvableValue(z.string()),
  format: resolvableValue(z.string()),
  location: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsGuarddutyIpsetOutputSchema = z.object({
  arn: z.string().optional(),
  ip_set_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsGuarddutyIpsetInputProps =
  & z.input<typeof AwsGuarddutyIpsetInputSchema>
  & NodeProps

export type AwsGuarddutyIpsetOutputProps =
  & z.output<typeof AwsGuarddutyIpsetOutputSchema>
  & z.output<typeof AwsGuarddutyIpsetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/guardduty_ipset

export function AwsGuarddutyIpset(props: Partial<AwsGuarddutyIpsetInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_ipset'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGuarddutyIpsetInputSchema}
      _outputSchema={AwsGuarddutyIpsetOutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyIpset = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGuarddutyIpsetOutputProps>(
    AwsGuarddutyIpset,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGuarddutyIpsets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGuarddutyIpsetOutputProps>(
    AwsGuarddutyIpset,
    idFilter,
    baseNode,
    optional,
  )
