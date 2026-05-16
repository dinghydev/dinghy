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

export const AwsEc2DefaultCreditSpecificationInputSchema = TfMetaSchema.extend({
  cpu_credits: resolvableValue(z.string()),
  instance_family: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEc2DefaultCreditSpecificationOutputSchema = z.object({})

export type AwsEc2DefaultCreditSpecificationInputProps =
  & z.input<typeof AwsEc2DefaultCreditSpecificationInputSchema>
  & NodeProps

export type AwsEc2DefaultCreditSpecificationOutputProps =
  & z.output<typeof AwsEc2DefaultCreditSpecificationOutputSchema>
  & z.output<typeof AwsEc2DefaultCreditSpecificationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_default_credit_specification

export function AwsEc2DefaultCreditSpecification(
  props: Partial<AwsEc2DefaultCreditSpecificationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_default_credit_specification'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2DefaultCreditSpecificationInputSchema}
      _outputSchema={AwsEc2DefaultCreditSpecificationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2DefaultCreditSpecification = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2DefaultCreditSpecificationOutputProps>(
    AwsEc2DefaultCreditSpecification,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2DefaultCreditSpecifications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2DefaultCreditSpecificationOutputProps>(
    AwsEc2DefaultCreditSpecification,
    idFilter,
    baseNode,
    optional,
  )
