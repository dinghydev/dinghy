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

export const AwsRamResourceShareInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  allow_external_principals: resolvableValue(z.boolean().optional()),
  permission_arns: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  resource_share_configuration: resolvableValue(
    z.object({
      retain_sharing_on_account_leave_organization: z.boolean().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRamResourceShareOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRamResourceShareInputProps =
  & z.input<typeof AwsRamResourceShareInputSchema>
  & NodeProps

export type AwsRamResourceShareOutputProps =
  & z.output<typeof AwsRamResourceShareOutputSchema>
  & z.output<typeof AwsRamResourceShareInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ram_resource_share

export function AwsRamResourceShare(
  props: Partial<AwsRamResourceShareInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ram_resource_share'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRamResourceShareInputSchema}
      _outputSchema={AwsRamResourceShareOutputSchema}
      {...props}
    />
  )
}

export const useAwsRamResourceShare = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRamResourceShareOutputProps>(
    AwsRamResourceShare,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRamResourceShares = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRamResourceShareOutputProps>(
    AwsRamResourceShare,
    idFilter,
    baseNode,
    optional,
  )
