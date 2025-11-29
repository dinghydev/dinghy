import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/servicecatalog_provisioning_artifacts

export const InputSchema = z.object({
  product_id: resolvableValue(z.string()),
  accept_language: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  provisioning_artifact_details: z.object({
    active: z.boolean(),
    created_time: z.string(),
    description: z.string(),
    guidance: z.string(),
    id: z.string(),
    name: z.string(),
    type: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsServicecatalogProvisioningArtifacts(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_provisioning_artifacts'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsServicecatalogProvisioningArtifactss = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    DataAwsServicecatalogProvisioningArtifacts,
    node,
    id,
  )
