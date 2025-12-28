import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCeCostCategory } from './AwsCeCostCategory.tsx'

export const InputSchema = z.object({
  cost_category_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  default_value: z.string().optional(),
  effective_end: z.string().optional(),
  effective_start: z.string().optional(),
  id: z.string().optional(),
  rule: z.set(z.object({
    inherited_value: z.object({
      dimension_key: z.string(),
      dimension_name: z.string(),
    }).array(),
    rule: z.object({
      and: z.set(z.object({
        and: z.set(z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
        })),
        cost_category: z.object({
          key: z.string(),
          match_options: z.set(z.string()),
          values: z.set(z.string()),
        }).array(),
        dimension: z.object({
          key: z.string(),
          match_options: z.set(z.string()),
          values: z.set(z.string()),
        }).array(),
        not: z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
        }).array(),
        or: z.set(z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
        })),
        tags: z.object({
          key: z.string(),
          match_options: z.set(z.string()),
          values: z.set(z.string()),
        }).array(),
      })),
      cost_category: z.object({
        key: z.string(),
        match_options: z.set(z.string()),
        values: z.set(z.string()),
      }).array(),
      dimension: z.object({
        key: z.string(),
        match_options: z.set(z.string()),
        values: z.set(z.string()),
      }).array(),
      not: z.object({
        and: z.set(z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
        })),
        cost_category: z.object({
          key: z.string(),
          match_options: z.set(z.string()),
          values: z.set(z.string()),
        }).array(),
        dimension: z.object({
          key: z.string(),
          match_options: z.set(z.string()),
          values: z.set(z.string()),
        }).array(),
        not: z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
        }).array(),
        or: z.set(z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
        })),
        tags: z.object({
          key: z.string(),
          match_options: z.set(z.string()),
          values: z.set(z.string()),
        }).array(),
      }).array(),
      or: z.set(z.object({
        and: z.set(z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
        })),
        cost_category: z.object({
          key: z.string(),
          match_options: z.set(z.string()),
          values: z.set(z.string()),
        }).array(),
        dimension: z.object({
          key: z.string(),
          match_options: z.set(z.string()),
          values: z.set(z.string()),
        }).array(),
        not: z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
        }).array(),
        or: z.set(z.object({
          cost_category: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          dimension: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
          tags: z.object({
            key: z.string(),
            match_options: z.set(z.string()),
            values: z.set(z.string()),
          }).array(),
        })),
        tags: z.object({
          key: z.string(),
          match_options: z.set(z.string()),
          values: z.set(z.string()),
        }).array(),
      })),
      tags: z.object({
        key: z.string(),
        match_options: z.set(z.string()),
        values: z.set(z.string()),
      }).array(),
    }).array(),
    type: z.string(),
    value: z.string(),
  })).optional(),
  rule_version: z.string().optional(),
  split_charge_rule: z.set(z.object({
    method: z.string(),
    parameter: z.set(z.object({
      type: z.string(),
      values: z.set(z.string()),
    })),
    source: z.string(),
    targets: z.set(z.string()),
  })).optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ce_cost_category

export function DataAwsCeCostCategory(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsCeCostCategory = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(DataAwsCeCostCategory, idFilter, baseNode, optional)

export const useDataAwsCeCostCategorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsCeCostCategory,
    idFilter,
    baseNode,
    optional,
  )
