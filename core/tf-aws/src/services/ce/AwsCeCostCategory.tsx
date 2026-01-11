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

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  rule: resolvableValue(
    z.object({
      type: z.string().optional(),
      value: z.string().optional(),
      inherited_value: z.object({
        dimension_key: z.string().optional(),
        dimension_name: z.string().optional(),
      }).optional(),
      rule: z.object({
        and: z.object({
          and: z.object({
            cost_category: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            dimension: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            tags: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
          }).array().optional(),
          cost_category: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
          dimension: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
          not: z.object({
            cost_category: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            dimension: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            tags: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
          }).optional(),
          or: z.object({
            cost_category: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            dimension: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            tags: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
          }).array().optional(),
          tags: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
        }).array().optional(),
        cost_category: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
        dimension: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
        not: z.object({
          and: z.object({
            cost_category: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            dimension: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            tags: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
          }).array().optional(),
          cost_category: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
          dimension: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
          not: z.object({
            cost_category: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            dimension: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            tags: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
          }).optional(),
          or: z.object({
            cost_category: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            dimension: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            tags: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
          }).array().optional(),
          tags: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
        }).optional(),
        or: z.object({
          and: z.object({
            cost_category: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            dimension: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            tags: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
          }).array().optional(),
          cost_category: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
          dimension: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
          not: z.object({
            cost_category: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            dimension: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            tags: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
          }).optional(),
          or: z.object({
            cost_category: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            dimension: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
            tags: z.object({
              key: z.string().optional(),
              match_options: z.string().array().optional(),
              values: z.string().array().optional(),
            }).optional(),
          }).array().optional(),
          tags: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
        }).array().optional(),
        tags: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
      }).optional(),
    }).array(),
  ),
  rule_version: resolvableValue(z.string()),
  default_value: resolvableValue(z.string().optional()),
  effective_start: resolvableValue(z.string().optional()),
  split_charge_rule: resolvableValue(
    z.object({
      method: z.string(),
      source: z.string(),
      targets: z.string().array(),
      parameter: z.object({
        type: z.string().optional(),
        values: z.string().array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  effective_end: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ce_cost_category

export function AwsCeCostCategory(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ce_cost_category'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCeCostCategory = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsCeCostCategory, idFilter, baseNode, optional)

export const useAwsCeCostCategorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsCeCostCategory, idFilter, baseNode, optional)
