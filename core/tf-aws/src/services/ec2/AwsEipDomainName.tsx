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

export const AwsEipDomainNameInputSchema = TfMetaSchema.extend({
  allocation_id: resolvableValue(z.string()),
  domain_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEipDomainNameOutputSchema = z.object({
  id: z.string().optional(),
  ptr_record: z.string().optional(),
})

export type AwsEipDomainNameInputProps =
  & z.input<typeof AwsEipDomainNameInputSchema>
  & NodeProps

export type AwsEipDomainNameOutputProps =
  & z.output<typeof AwsEipDomainNameOutputSchema>
  & z.output<typeof AwsEipDomainNameInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/eip_domain_name

export function AwsEipDomainName(props: Partial<AwsEipDomainNameInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eip_domain_name'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEipDomainNameInputSchema}
      _outputSchema={AwsEipDomainNameOutputSchema}
      {...props}
    />
  )
}

export const useAwsEipDomainName = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEipDomainNameOutputProps>(
    AwsEipDomainName,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEipDomainNames = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEipDomainNameOutputProps>(
    AwsEipDomainName,
    idFilter,
    baseNode,
    optional,
  )
