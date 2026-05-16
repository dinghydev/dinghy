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

export const AwsRamResourceShareAccepterInputSchema = TfMetaSchema.extend({
  share_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRamResourceShareAccepterOutputSchema = z.object({
  invitation_arn: z.string().optional(),
  receiver_account_id: z.string().optional(),
  resources: z.string().array().optional(),
  sender_account_id: z.string().optional(),
  share_id: z.string().optional(),
  share_name: z.string().optional(),
  status: z.string().optional(),
})

export type AwsRamResourceShareAccepterInputProps =
  & z.input<typeof AwsRamResourceShareAccepterInputSchema>
  & NodeProps

export type AwsRamResourceShareAccepterOutputProps =
  & z.output<typeof AwsRamResourceShareAccepterOutputSchema>
  & z.output<typeof AwsRamResourceShareAccepterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ram_resource_share_accepter

export function AwsRamResourceShareAccepter(
  props: Partial<AwsRamResourceShareAccepterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ram_resource_share_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRamResourceShareAccepterInputSchema}
      _outputSchema={AwsRamResourceShareAccepterOutputSchema}
      {...props}
    />
  )
}

export const useAwsRamResourceShareAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRamResourceShareAccepterOutputProps>(
    AwsRamResourceShareAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRamResourceShareAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRamResourceShareAccepterOutputProps>(
    AwsRamResourceShareAccepter,
    idFilter,
    baseNode,
    optional,
  )
