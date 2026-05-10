import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsArcregionswitchPlan } from './AwsArcregionswitchPlan.tsx'

export const InputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  description: z.string().optional(),
  execution_role: z.string().optional(),
  name: z.string().optional(),
  owner: z.string().optional(),
  primary_region: z.string().optional(),
  recovery_approach: z.string().optional(),
  recovery_time_objective_minutes: z.number().optional(),
  regions: z.string().array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  updated_at: z.string().optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/arcregionswitch_plan

export function DataAwsArcregionswitchPlan(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsArcregionswitchPlan
      _type='aws_arcregionswitch_plan'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsArcregionswitchPlan = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsArcregionswitchPlan,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsArcregionswitchPlans = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsArcregionswitchPlan,
    idFilter,
    baseNode,
    optional,
  )
