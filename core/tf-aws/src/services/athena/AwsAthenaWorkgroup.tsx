import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/athena_workgroup

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  configuration: z.object({
    bytes_scanned_cutoff_per_query: z.number().optional(),
    enforce_workgroup_configuration: z.boolean().optional(),
    execution_role: z.string().optional(),
    publish_cloudwatch_metrics_enabled: z.boolean().optional(),
    requester_pays_enabled: z.boolean().optional(),
  }).optional().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAthenaWorkgroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_athena_workgroup'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAthenaWorkgroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAthenaWorkgroup, node, id)

export const useAwsAthenaWorkgroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAthenaWorkgroup, node, id)
