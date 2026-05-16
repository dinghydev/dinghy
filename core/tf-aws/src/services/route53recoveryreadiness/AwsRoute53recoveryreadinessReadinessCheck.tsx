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

export const AwsRoute53recoveryreadinessReadinessCheckInputSchema = TfMetaSchema
  .extend({
    readiness_check_name: resolvableValue(z.string()),
    resource_set_name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsRoute53recoveryreadinessReadinessCheckOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRoute53recoveryreadinessReadinessCheckInputProps =
  & z.input<typeof AwsRoute53recoveryreadinessReadinessCheckInputSchema>
  & NodeProps

export type AwsRoute53recoveryreadinessReadinessCheckOutputProps =
  & z.output<typeof AwsRoute53recoveryreadinessReadinessCheckOutputSchema>
  & z.output<typeof AwsRoute53recoveryreadinessReadinessCheckInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53recoveryreadiness_readiness_check

export function AwsRoute53recoveryreadinessReadinessCheck(
  props: Partial<AwsRoute53recoveryreadinessReadinessCheckInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53recoveryreadiness_readiness_check'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53recoveryreadinessReadinessCheckInputSchema}
      _outputSchema={AwsRoute53recoveryreadinessReadinessCheckOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53recoveryreadinessReadinessCheck = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53recoveryreadinessReadinessCheckOutputProps>(
    AwsRoute53recoveryreadinessReadinessCheck,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53recoveryreadinessReadinessChecks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53recoveryreadinessReadinessCheckOutputProps>(
    AwsRoute53recoveryreadinessReadinessCheck,
    idFilter,
    baseNode,
    optional,
  )
