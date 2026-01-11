import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  network_insights_path_id: resolvableValue(z.string()),
  filter_in_arns: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  wait_for_completion: resolvableValue(z.boolean().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  alternate_path_hints: z.object({
    component_arn: z.string(),
    component_id: z.string(),
  }).array().optional(),
  arn: z.string().optional(),
  explanations: z.object({
    acl: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    acl_rule: z.object({
      cidr: z.string(),
      egress: z.boolean(),
      port_range: z.object({
        from: z.number(),
        to: z.number(),
      }).array(),
      protocol: z.string(),
      rule_action: z.string(),
      rule_number: z.number(),
    }).array(),
    address: z.string(),
    addresses: z.string().array(),
    attached_to: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    availability_zones: z.string().array(),
    cidrs: z.string().array(),
    classic_load_balancer_listener: z.object({
      instance_port: z.number(),
      load_balancer_port: z.number(),
    }).array(),
    component: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    customer_gateway: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    destination: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    destination_vpc: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    direction: z.string(),
    elastic_load_balancer_listener: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    explanation_code: z.string(),
    ingress_route_table: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    internet_gateway: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    load_balancer_arn: z.string(),
    load_balancer_listener_port: z.number(),
    load_balancer_target_group: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    load_balancer_target_groups: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    load_balancer_target_port: z.number(),
    missing_component: z.string(),
    nat_gateway: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    network_interface: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    packet_field: z.string(),
    port: z.number(),
    port_ranges: z.object({
      from: z.number(),
      to: z.number(),
    }).array(),
    prefix_list: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    protocols: z.string().array(),
    route_table: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    route_table_route: z.object({
      destination_cidr: z.string(),
      destination_prefix_list_id: z.string(),
      egress_only_internet_gateway_id: z.string(),
      gateway_id: z.string(),
      instance_id: z.string(),
      nat_gateway_id: z.string(),
      network_interface_id: z.string(),
      origin: z.string(),
      transit_gateway_id: z.string(),
      vpc_peering_connection_id: z.string(),
    }).array(),
    security_group: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    security_group_rule: z.object({
      cidr: z.string(),
      direction: z.string(),
      port_range: z.object({
        from: z.number(),
        to: z.number(),
      }).array(),
      prefix_list_id: z.string(),
      protocol: z.string(),
      security_group_id: z.string(),
    }).array(),
    security_groups: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    source_vpc: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    state: z.string(),
    subnet: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    subnet_route_table: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    transit_gateway: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    transit_gateway_attachment: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    transit_gateway_route_table: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    transit_gateway_route_table_route: z.object({
      attachment_id: z.string(),
      destination_cidr: z.string(),
      prefix_list_id: z.string(),
      resource_id: z.string(),
      resource_type: z.string(),
      route_origin: z.string(),
      state: z.string(),
    }).array(),
    vpc: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    vpc_endpoint: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    vpc_peering_connection: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    vpn_connection: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    vpn_gateway: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
  }).array().optional(),
  forward_path_components: z.object({
    acl_rule: z.object({
      cidr: z.string(),
      egress: z.boolean(),
      port_range: z.object({
        from: z.number(),
        to: z.number(),
      }).array(),
      protocol: z.string(),
      rule_action: z.string(),
      rule_number: z.number(),
    }).array(),
    additional_details: z.object({
      additional_detail_type: z.string(),
      component: z.object({
        arn: z.string(),
        id: z.string(),
        name: z.string(),
      }).array(),
    }).array(),
    attached_to: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    component: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    destination_vpc: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    inbound_header: z.object({
      destination_addresses: z.string().array(),
      destination_port_ranges: z.object({
        from: z.number(),
        to: z.number(),
      }).array(),
      protocol: z.string(),
      source_addresses: z.string().array(),
      source_port_ranges: z.object({
        from: z.number(),
        to: z.number(),
      }).array(),
    }).array(),
    outbound_header: z.object({
      destination_addresses: z.string().array(),
      destination_port_ranges: z.object({
        from: z.number(),
        to: z.number(),
      }).array(),
      protocol: z.string(),
      source_addresses: z.string().array(),
      source_port_ranges: z.object({
        from: z.number(),
        to: z.number(),
      }).array(),
    }).array(),
    route_table_route: z.object({
      destination_cidr: z.string(),
      destination_prefix_list_id: z.string(),
      egress_only_internet_gateway_id: z.string(),
      gateway_id: z.string(),
      instance_id: z.string(),
      nat_gateway_id: z.string(),
      network_interface_id: z.string(),
      origin: z.string(),
      transit_gateway_id: z.string(),
      vpc_peering_connection_id: z.string(),
    }).array(),
    security_group_rule: z.object({
      cidr: z.string(),
      direction: z.string(),
      port_range: z.object({
        from: z.number(),
        to: z.number(),
      }).array(),
      prefix_list_id: z.string(),
      protocol: z.string(),
      security_group_id: z.string(),
    }).array(),
    sequence_number: z.number(),
    source_vpc: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    subnet: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    transit_gateway: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    transit_gateway_route_table_route: z.object({
      attachment_id: z.string(),
      destination_cidr: z.string(),
      prefix_list_id: z.string(),
      resource_id: z.string(),
      resource_type: z.string(),
      route_origin: z.string(),
      state: z.string(),
    }).array(),
    vpc: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
  }).array().optional(),
  id: z.string().optional(),
  path_found: z.boolean().optional(),
  return_path_components: z.object({
    acl_rule: z.object({
      cidr: z.string(),
      egress: z.boolean(),
      port_range: z.object({
        from: z.number(),
        to: z.number(),
      }).array(),
      protocol: z.string(),
      rule_action: z.string(),
      rule_number: z.number(),
    }).array(),
    additional_details: z.object({
      additional_detail_type: z.string(),
      component: z.object({
        arn: z.string(),
        id: z.string(),
        name: z.string(),
      }).array(),
    }).array(),
    attached_to: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    component: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    destination_vpc: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    inbound_header: z.object({
      destination_addresses: z.string().array(),
      destination_port_ranges: z.object({
        from: z.number(),
        to: z.number(),
      }).array(),
      protocol: z.string(),
      source_addresses: z.string().array(),
      source_port_ranges: z.object({
        from: z.number(),
        to: z.number(),
      }).array(),
    }).array(),
    outbound_header: z.object({
      destination_addresses: z.string().array(),
      destination_port_ranges: z.object({
        from: z.number(),
        to: z.number(),
      }).array(),
      protocol: z.string(),
      source_addresses: z.string().array(),
      source_port_ranges: z.object({
        from: z.number(),
        to: z.number(),
      }).array(),
    }).array(),
    route_table_route: z.object({
      destination_cidr: z.string(),
      destination_prefix_list_id: z.string(),
      egress_only_internet_gateway_id: z.string(),
      gateway_id: z.string(),
      instance_id: z.string(),
      nat_gateway_id: z.string(),
      network_interface_id: z.string(),
      origin: z.string(),
      transit_gateway_id: z.string(),
      vpc_peering_connection_id: z.string(),
    }).array(),
    security_group_rule: z.object({
      cidr: z.string(),
      direction: z.string(),
      port_range: z.object({
        from: z.number(),
        to: z.number(),
      }).array(),
      prefix_list_id: z.string(),
      protocol: z.string(),
      security_group_id: z.string(),
    }).array(),
    sequence_number: z.number(),
    source_vpc: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    subnet: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    transit_gateway: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    transit_gateway_route_table_route: z.object({
      attachment_id: z.string(),
      destination_cidr: z.string(),
      prefix_list_id: z.string(),
      resource_id: z.string(),
      resource_type: z.string(),
      route_origin: z.string(),
      state: z.string(),
    }).array(),
    vpc: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
  }).array().optional(),
  start_date: z.string().optional(),
  status: z.string().optional(),
  status_message: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  warning_message: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ec2_network_insights_analysis

export function AwsEc2NetworkInsightsAnalysis(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_network_insights_analysis'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2NetworkInsightsAnalysiss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsEc2NetworkInsightsAnalysis,
    idFilter,
    baseNode,
    optional,
  )
