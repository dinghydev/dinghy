import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsServicecatalogPortfolio } from './AwsServicecatalogPortfolio.tsx'

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  accept_language: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  description: z.string().optional(),
  name: z.string().optional(),
  provider_name: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/servicecatalog_portfolio

export function DataAwsServicecatalogPortfolio(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsServicecatalogPortfolio
      _type='aws_servicecatalog_portfolio'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsServicecatalogPortfolio = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsServicecatalogPortfolio,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsServicecatalogPortfolios = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsServicecatalogPortfolio,
    idFilter,
    baseNode,
    optional,
  )
