import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/servicecatalog_provisioning_artifact

export const InputSchema = z.object({
  product_id: resolvableValue(z.string()),
  accept_language: resolvableValue(z.string().optional()),
  active: resolvableValue(z.boolean().optional()),
  description: resolvableValue(z.string().optional()),
  disable_template_validation: resolvableValue(z.boolean().optional()),
  guidance: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  template_physical_id: resolvableValue(z.string().optional()),
  template_url: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  created_time: z.string().optional(),
  id: z.string().optional(),
  provisioning_artifact_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsServicecatalogProvisioningArtifact(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_provisioning_artifact'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogProvisioningArtifact = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsServicecatalogProvisioningArtifact, node, id)

export const useAwsServicecatalogProvisioningArtifacts = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsServicecatalogProvisioningArtifact, node, id)
