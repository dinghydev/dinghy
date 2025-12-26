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
  owner: resolvableValue(z.string()),
  provisioning_artifact_parameters: resolvableValue(z.object({
    description: z.string().optional(),
    disable_template_validation: z.boolean().optional(),
    name: z.string().optional(),
    template_physical_id: z.string().optional(),
    template_url: z.string().optional(),
    type: z.string().optional(),
  })),
  type: resolvableValue(z.string()),
  accept_language: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  distributor: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  support_description: resolvableValue(z.string().optional()),
  support_email: resolvableValue(z.string().optional()),
  support_url: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  has_default_path: z.boolean().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/servicecatalog_product

export function AwsServicecatalogProduct(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_product'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogProduct = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsServicecatalogProduct,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicecatalogProducts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsServicecatalogProduct,
    idFilter,
    baseNode,
    optional,
  )
