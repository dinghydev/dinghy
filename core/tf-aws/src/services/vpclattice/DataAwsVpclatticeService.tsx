import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpclatticeService } from './AwsVpclatticeService.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/vpclattice_service

export const InputSchema = z.object({
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  service_identifier: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  auth_type: z.string().optional(),
  certificate_arn: z.string().optional(),
  custom_domain_name: z.string().optional(),
  dns_entry: z.object({
    domain_name: z.string(),
    hosted_zone_id: z.string(),
  }).array().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsVpclatticeService(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsVpclatticeService
      _type='aws_vpclattice_service'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpclatticeService = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsVpclatticeService, node, id)

export const useDataAwsVpclatticeServices = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsVpclatticeService, node, id)
