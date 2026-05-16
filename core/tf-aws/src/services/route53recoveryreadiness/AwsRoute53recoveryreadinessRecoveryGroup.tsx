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

export const AwsRoute53recoveryreadinessRecoveryGroupInputSchema = TfMetaSchema
  .extend({
    recovery_group_name: resolvableValue(z.string()),
    cells: resolvableValue(z.string().array().optional()),
    id: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsRoute53recoveryreadinessRecoveryGroupOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRoute53recoveryreadinessRecoveryGroupInputProps =
  & z.input<typeof AwsRoute53recoveryreadinessRecoveryGroupInputSchema>
  & NodeProps

export type AwsRoute53recoveryreadinessRecoveryGroupOutputProps =
  & z.output<typeof AwsRoute53recoveryreadinessRecoveryGroupOutputSchema>
  & z.output<typeof AwsRoute53recoveryreadinessRecoveryGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53recoveryreadiness_recovery_group

export function AwsRoute53recoveryreadinessRecoveryGroup(
  props: Partial<AwsRoute53recoveryreadinessRecoveryGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53recoveryreadiness_recovery_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53recoveryreadinessRecoveryGroupInputSchema}
      _outputSchema={AwsRoute53recoveryreadinessRecoveryGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53recoveryreadinessRecoveryGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53recoveryreadinessRecoveryGroupOutputProps>(
    AwsRoute53recoveryreadinessRecoveryGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53recoveryreadinessRecoveryGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53recoveryreadinessRecoveryGroupOutputProps>(
    AwsRoute53recoveryreadinessRecoveryGroup,
    idFilter,
    baseNode,
    optional,
  )
