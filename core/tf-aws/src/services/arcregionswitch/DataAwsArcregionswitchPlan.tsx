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

export const DataAwsArcregionswitchPlanInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsArcregionswitchPlanOutputSchema = z.object({
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

export type DataAwsArcregionswitchPlanInputProps =
  & z.input<typeof DataAwsArcregionswitchPlanInputSchema>
  & NodeProps

export type DataAwsArcregionswitchPlanOutputProps =
  & z.output<typeof DataAwsArcregionswitchPlanOutputSchema>
  & z.output<typeof DataAwsArcregionswitchPlanInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/arcregionswitch_plan

export function DataAwsArcregionswitchPlan(
  props: Partial<DataAwsArcregionswitchPlanInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsArcregionswitchPlan
      _type='aws_arcregionswitch_plan'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsArcregionswitchPlanInputSchema}
      _outputSchema={DataAwsArcregionswitchPlanOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsArcregionswitchPlan = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsArcregionswitchPlanOutputProps>(
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
  useTypedNodes<DataAwsArcregionswitchPlanOutputProps>(
    DataAwsArcregionswitchPlan,
    idFilter,
    baseNode,
    optional,
  )
