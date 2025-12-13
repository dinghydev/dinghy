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
  accept_language: resolvableValue(z.string().optional()),
  ignore_errors: resolvableValue(z.boolean().optional()),
  notification_arns: resolvableValue(z.string().array().optional()),
  path_id: resolvableValue(z.string().optional()),
  path_name: resolvableValue(z.string().optional()),
  product_id: resolvableValue(z.string().optional()),
  product_name: resolvableValue(z.string().optional()),
  provisioning_artifact_id: resolvableValue(z.string().optional()),
  provisioning_artifact_name: resolvableValue(z.string().optional()),
  provisioning_parameters: resolvableValue(
    z.object({
      key: z.string(),
      use_previous_value: z.boolean().optional(),
      value: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  retain_physical_resources: resolvableValue(z.boolean().optional()),
  stack_set_provisioning_preferences: resolvableValue(
    z.object({
      accounts: z.string().array().optional(),
      failure_tolerance_count: z.number().optional(),
      failure_tolerance_percentage: z.number().optional(),
      max_concurrency_count: z.number().optional(),
      max_concurrency_percentage: z.number().optional(),
      regions: z.string().array().optional(),
    }).optional(),
  ),
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
  cloudwatch_dashboard_names: z.set(z.string()).optional(),
  created_time: z.string().optional(),
  id: z.string().optional(),
  last_provisioning_record_id: z.string().optional(),
  last_record_id: z.string().optional(),
  last_successful_provisioning_record_id: z.string().optional(),
  launch_role_arn: z.string().optional(),
  outputs: z.set(z.object({
    description: z.string(),
    key: z.string(),
    value: z.string(),
  })).optional(),
  status: z.string().optional(),
  status_message: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/servicecatalog_provisioned_product

export function AwsServicecatalogProvisionedProduct(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_provisioned_product'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogProvisionedProduct = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    AwsServicecatalogProvisionedProduct,
    idFilter,
    baseNode,
  )

export const useAwsServicecatalogProvisionedProducts = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsServicecatalogProvisionedProduct,
    idFilter,
    baseNode,
  )
