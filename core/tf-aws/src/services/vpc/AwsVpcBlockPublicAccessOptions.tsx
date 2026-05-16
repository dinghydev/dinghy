import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsVpcBlockPublicAccessOptionsInputSchema = TfMetaSchema.extend({
  internet_gateway_block_mode: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsVpcBlockPublicAccessOptionsOutputSchema = z.object({
  aws_account_id: z.string().optional(),
  aws_region: z.string().optional(),
  id: z.string().optional(),
})

export type AwsVpcBlockPublicAccessOptionsInputProps =
  & z.input<typeof AwsVpcBlockPublicAccessOptionsInputSchema>
  & NodeProps

export type AwsVpcBlockPublicAccessOptionsOutputProps =
  & z.output<typeof AwsVpcBlockPublicAccessOptionsOutputSchema>
  & z.output<typeof AwsVpcBlockPublicAccessOptionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_block_public_access_options

export function AwsVpcBlockPublicAccessOptions(
  props: Partial<AwsVpcBlockPublicAccessOptionsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_block_public_access_options'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcBlockPublicAccessOptionsInputSchema}
      _outputSchema={AwsVpcBlockPublicAccessOptionsOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcBlockPublicAccessOptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcBlockPublicAccessOptionsOutputProps>(
    AwsVpcBlockPublicAccessOptions,
    idFilter,
    baseNode,
    optional,
  )
