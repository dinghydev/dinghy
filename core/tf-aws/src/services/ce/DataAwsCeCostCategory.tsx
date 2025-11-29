import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCeCostCategory } from './AwsCeCostCategory.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ce_cost_category

export const InputSchema = z.object({
  cost_category_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
})

export const OutputSchema = z.object({
  default_value: z.string().optional(),
  effective_end: z.string().optional(),
  effective_start: z.string().optional(),
  id: z.string().optional(),
  rule: z.object({
    inherited_value: z.object({
      dimension_key: z.string(),
      dimension_name: z.string(),
    }).array(),
    rule: z.object({
      and: z.object({
        and: z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
        }).array(),
        cost_category: z.object({
          key: z.string(),
          match_options: z.string().array(),
          values: z.string().array(),
        }).array(),
        dimension: z.object({
          key: z.string(),
          match_options: z.string().array(),
          values: z.string().array(),
        }).array(),
        not: z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
        }).array(),
        or: z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
        }).array(),
        tags: z.object({
          key: z.string(),
          match_options: z.string().array(),
          values: z.string().array(),
        }).array(),
      }).array(),
      cost_category: z.object({
        key: z.string(),
        match_options: z.string().array(),
        values: z.string().array(),
      }).array(),
      dimension: z.object({
        key: z.string(),
        match_options: z.string().array(),
        values: z.string().array(),
      }).array(),
      not: z.object({
        and: z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
        }).array(),
        cost_category: z.object({
          key: z.string(),
          match_options: z.string().array(),
          values: z.string().array(),
        }).array(),
        dimension: z.object({
          key: z.string(),
          match_options: z.string().array(),
          values: z.string().array(),
        }).array(),
        not: z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
        }).array(),
        or: z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
        }).array(),
        tags: z.object({
          key: z.string(),
          match_options: z.string().array(),
          values: z.string().array(),
        }).array(),
      }).array(),
      or: z.object({
        and: z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
        }).array(),
        cost_category: z.object({
          key: z.string(),
          match_options: z.string().array(),
          values: z.string().array(),
        }).array(),
        dimension: z.object({
          key: z.string(),
          match_options: z.string().array(),
          values: z.string().array(),
        }).array(),
        not: z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
        }).array(),
        or: z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.string().array(),
            values: z.string().array(),
          }).array(),
        }).array(),
        tags: z.object({
          key: z.string(),
          match_options: z.string().array(),
          values: z.string().array(),
        }).array(),
      }).array(),
      tags: z.object({
        key: z.string(),
        match_options: z.string().array(),
        values: z.string().array(),
      }).array(),
    }).array(),
    type: z.string(),
    value: z.string(),
  }).array().optional(),
  rule_version: z.string().optional(),
  split_charge_rule: z.object({
    method: z.string(),
    parameter: z.object({
      type: z.string(),
      values: z.string().array(),
    }).array(),
    source: z.string(),
    targets: z.string().array(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCeCostCategory(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCeCostCategory
      _type='aws_ce_cost_category'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCeCostCategory = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsCeCostCategory, node, id)

export const useDataAwsCeCostCategorys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsCeCostCategory, node, id)
