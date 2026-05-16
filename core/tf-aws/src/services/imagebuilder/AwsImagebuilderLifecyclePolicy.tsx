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

export const AwsImagebuilderLifecyclePolicyInputSchema = TfMetaSchema.extend({
  execution_role: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  resource_type: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  policy_detail: resolvableValue(
    z.object({
      action: z.object({
        type: z.string(),
        include_resources: z.object({
          amis: z.boolean().optional(),
          containers: z.boolean().optional(),
          snapshots: z.boolean().optional(),
        }).array().optional(),
      }).array().optional(),
      exclusion_rules: z.object({
        tag_map: z.record(z.string(), z.string()).optional(),
        amis: z.object({
          is_public: z.boolean().optional(),
          regions: z.string().array().optional(),
          shared_accounts: z.string().array().optional(),
          tag_map: z.record(z.string(), z.string()).optional(),
          last_launched: z.object({
            unit: z.string(),
            value: z.number(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      filter: z.object({
        retain_at_least: z.number().optional(),
        type: z.string(),
        unit: z.string().optional(),
        value: z.number(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  resource_selection: resolvableValue(
    z.object({
      tag_map: z.record(z.string(), z.string()).optional(),
      recipe: z.object({
        name: z.string(),
        semantic_version: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsImagebuilderLifecyclePolicyOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsImagebuilderLifecyclePolicyImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsImagebuilderLifecyclePolicyInputProps =
  & z.input<typeof AwsImagebuilderLifecyclePolicyInputSchema>
  & z.input<typeof AwsImagebuilderLifecyclePolicyImportSchema>
  & NodeProps

export type AwsImagebuilderLifecyclePolicyOutputProps =
  & z.output<typeof AwsImagebuilderLifecyclePolicyOutputSchema>
  & z.output<typeof AwsImagebuilderLifecyclePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/imagebuilder_lifecycle_policy

export function AwsImagebuilderLifecyclePolicy(
  props: Partial<AwsImagebuilderLifecyclePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_lifecycle_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsImagebuilderLifecyclePolicyInputSchema}
      _outputSchema={AwsImagebuilderLifecyclePolicyOutputSchema}
      _importSchema={AwsImagebuilderLifecyclePolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsImagebuilderLifecyclePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsImagebuilderLifecyclePolicyOutputProps>(
    AwsImagebuilderLifecyclePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsImagebuilderLifecyclePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsImagebuilderLifecyclePolicyOutputProps>(
    AwsImagebuilderLifecyclePolicy,
    idFilter,
    baseNode,
    optional,
  )
