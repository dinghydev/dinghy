import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dataexchange_revision_assets

export const InputSchema = z.object({
  data_set_id: resolvableValue(z.string()),
  asset: resolvableValue(
    z.object({
      arn: z.string(),
      created_at: z.string(),
      id: z.string(),
      name: z.string(),
      updated_at: z.string(),
    }).array().optional(),
  ),
  comment: resolvableValue(z.string().optional()),
  finalized: resolvableValue(z.boolean().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  updated_at: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDataexchangeRevisionAssets(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dataexchange_revision_assets'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDataexchangeRevisionAssetss = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDataexchangeRevisionAssets, node, id)
