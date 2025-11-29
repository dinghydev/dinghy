import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route53recoveryreadiness_readiness_check

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRoute53recoveryreadinessReadinessCheck(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53recoveryreadiness_readiness_check'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53recoveryreadinessReadinessCheck = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsRoute53recoveryreadinessReadinessCheck, node, id)

export const useAwsRoute53recoveryreadinessReadinessChecks = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsRoute53recoveryreadinessReadinessCheck,
    node,
    id,
  )
