import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRedshiftserverlessWorkgroup } from './AwsRedshiftserverlessWorkgroup.tsx'

export const InputSchema = z.object({
  namespace_name: resolvableValue(z.string()),
  workgroup_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  endpoint: z.object({
    address: z.string(),
    port: z.number(),
    vpc_endpoint: z.object({
      network_interface: z.object({
        availability_zone: z.string(),
        network_interface_id: z.string(),
        private_ip_address: z.string(),
        subnet_id: z.string(),
      }).array(),
      vpc_endpoint_id: z.string(),
      vpc_id: z.string(),
    }).array(),
  }).array().optional(),
  enhanced_vpc_routing: z.boolean().optional(),
  id: z.string().optional(),
  publicly_accessible: z.boolean().optional(),
  security_group_ids: z.set(z.string()).optional(),
  subnet_ids: z.set(z.string()).optional(),
  track_name: z.string().optional(),
  workgroup_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/redshiftserverless_workgroup

export function DataAwsRedshiftserverlessWorkgroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsRedshiftserverlessWorkgroup
      _type='aws_redshiftserverless_workgroup'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRedshiftserverlessWorkgroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsRedshiftserverlessWorkgroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRedshiftserverlessWorkgroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsRedshiftserverlessWorkgroup,
    idFilter,
    baseNode,
    optional,
  )
