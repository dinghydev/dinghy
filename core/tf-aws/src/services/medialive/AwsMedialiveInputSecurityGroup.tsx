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

export const AwsMedialiveInputSecurityGroupInputSchema = TfMetaSchema.extend({
  whitelist_rules: resolvableValue(
    z.object({
      cidr: z.string(),
    }).array(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsMedialiveInputSecurityGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  inputs: z.string().array().optional(),
})

export type AwsMedialiveInputSecurityGroupInputProps =
  & z.input<typeof AwsMedialiveInputSecurityGroupInputSchema>
  & NodeProps

export type AwsMedialiveInputSecurityGroupOutputProps =
  & z.output<typeof AwsMedialiveInputSecurityGroupOutputSchema>
  & z.output<typeof AwsMedialiveInputSecurityGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/medialive_input_security_group

export function AwsMedialiveInputSecurityGroup(
  props: Partial<AwsMedialiveInputSecurityGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_medialive_input_security_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMedialiveInputSecurityGroupInputSchema}
      _outputSchema={AwsMedialiveInputSecurityGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsMedialiveInputSecurityGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMedialiveInputSecurityGroupOutputProps>(
    AwsMedialiveInputSecurityGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMedialiveInputSecurityGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMedialiveInputSecurityGroupOutputProps>(
    AwsMedialiveInputSecurityGroup,
    idFilter,
    baseNode,
    optional,
  )
