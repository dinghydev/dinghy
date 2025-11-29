import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/grafana_license_association

export const InputSchema = z.object({
  license_type: resolvableValue(z.string()),
  workspace_id: resolvableValue(z.string()),
  grafana_token: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  free_trial_expiration: z.string().optional(),
  license_expiration: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGrafanaLicenseAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_grafana_license_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGrafanaLicenseAssociation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGrafanaLicenseAssociation, node, id)

export const useAwsGrafanaLicenseAssociations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGrafanaLicenseAssociation, node, id)
