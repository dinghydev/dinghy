import {
  deepResolve,
  extendStyle,
  type NodeProps,
  Shape,
} from '@dinghy/base-components'

import {
  PRIVATE_SUBNET,
  PUBLIC_SUBNET,
} from '@dinghy/diagrams/containersAwsGroups'
import { AwsVpc, useAwsVpc } from '../../services/vpc/AwsVpc.tsx'
import {
  AwsInternetGateway,
  useAwsInternetGateway,
} from '../../services/vpc/AwsInternetGateway.tsx'
import { parseVpc, SubnetType } from './types.ts'
import { AwsSubnet } from '../../services/vpc/AwsSubnet.tsx'
import { AwsDefaultRouteTable } from '../../services/vpc/AwsDefaultRouteTable.tsx'
import { AwsRoute } from '../../services/vpc/AwsRoute.tsx'
import {
  AwsSecurityGroup,
  useAwsSecurityGroup,
} from '../../services/vpc/AwsSecurityGroup.tsx'
import { AwsVpcSecurityGroupIngressRule } from '../../services/vpc/AwsVpcSecurityGroupIngressRule.tsx'
import { AwsVpcSecurityGroupEgressRule } from '../../services/vpc/AwsVpcSecurityGroupEgressRule.tsx'
export function Vpc(
  { _components, children, ...props }: NodeProps,
) {
  const vpcConfig = parseVpc(props)

  function InternetGateway(props: any) {
    const InternetGatewayComponent =
      _components?.internetGateway as typeof AwsInternetGateway ||
      AwsInternetGateway
    const { awsVpc } = useAwsVpc()
    const name = () =>
      `${deepResolve(awsVpc.name).replace(/-vpc/g, '')}-internet-gateway`
    return (
      <InternetGatewayComponent
        _title={name}
        vpc_id={awsVpc.id}
        {...props}
      />
    )
  }

  function DefaultRouteTable({ children, ...props }: any) {
    const DefaultRouteTableComponent =
      _components?.defaultRouteTable as typeof AwsDefaultRouteTable ||
      AwsDefaultRouteTable
    const RouteComponent = _components?.route as typeof AwsRoute ||
      AwsRoute
    const { awsVpc } = useAwsVpc()
    const { internetGateway } = useAwsInternetGateway()
    const name = () =>
      `${deepResolve(awsVpc.name).replace(/-vpc/g, '')}-default-route-table`
    return (
      <DefaultRouteTableComponent
        _title={name}
        default_route_table_id={awsVpc.default_route_table_id}
        {...props}
      >
        <RouteComponent
          route_table_id={awsVpc.default_route_table_id}
          destination_cidr_block='0.0.0.0/0'
          gateway_id={internetGateway.id}
        />
        {children}
      </DefaultRouteTableComponent>
    )
  }

  function Subnets({ _typeOfSubnet, children, ...props }: any) {
    if (
      vpcConfig[
        `${_typeOfSubnet}SubnetsCount` as keyof typeof vpcConfig
      ] === 0
    ) return null

    function Subnet({ _subnet, ...props }: any) {
      const SubnetComponent = _components?.subnet as typeof AwsSubnet ||
        AwsSubnet
      const { awsVpc } = useAwsVpc()
      _subnet.vpc_id ??= awsVpc.id
      _subnet._title ??= _subnet.name
      return (
        <SubnetComponent
          {..._subnet}
          {...props}
        />
      )
    }

    const SubnetsComponent = _components?.subnets as typeof Shape || Shape
    return (
      <SubnetsComponent
        {...props}
      >
        {Object.values(
          vpcConfig[
            `${_typeOfSubnet}Subnets` as keyof typeof vpcConfig
          ] as Record<string, SubnetType>,
        ).map((subnet) => (
          <Subnet
            key={subnet.name}
            _subnet={subnet}
          />
        ))}
        {children}
      </SubnetsComponent>
    )
  }

  function PublicSubnets(props: any) {
    return (
      <Subnets
        _typeOfSubnet='public'
        _style={extendStyle(props, PUBLIC_SUBNET)}
      />
    )
  }
  function PrivateSubnets(props: any) {
    return (
      <Subnets
        _typeOfSubnet='private'
        _style={extendStyle(props, PRIVATE_SUBNET)}
      />
    )
  }

  function SecurityGroups(props: any) {
    if (
      Object.keys(vpcConfig.securityGroups).length === 0
    ) return null

    function SecurityGroupIngressRule({ _rule, ...props }: any) {
      const SecurityGroupIngressRuleComponent = _components
        ?.securityGroupIngressRule as typeof AwsVpcSecurityGroupIngressRule ||
        AwsVpcSecurityGroupIngressRule
      const { securityGroup } = useAwsSecurityGroup()
      return (
        <SecurityGroupIngressRuleComponent
          _title={_rule.description}
          security_group_id={securityGroup.id}
          {..._rule}
          {...props}
        />
      )
    }

    function SecurityGroupEgressRule({ _rule, ...props }: any) {
      const SecurityGroupEgressRuleComponent = _components
        ?.securityGroupEgressRule as typeof AwsVpcSecurityGroupEgressRule ||
        AwsVpcSecurityGroupEgressRule
      const { securityGroup } = useAwsSecurityGroup()
      return (
        <SecurityGroupEgressRuleComponent
          _title={_rule.description}
          security_group_id={securityGroup.id}
          {..._rule}
          {...props}
        />
      )
    }

    function SecurityGroup({ _securityGroup, ...props }: any) {
      const SecurityGroupComponent =
        _components?.securityGroup as typeof AwsSecurityGroup ||
        AwsSecurityGroup
      const { ingress, egress, ...securityGroup } = _securityGroup
      const { awsVpc } = useAwsVpc()
      securityGroup.vpc_id ??= awsVpc.id
      securityGroup._title ??= _securityGroup.name
      return (
        <SecurityGroupComponent
          {...securityGroup}
          {...props}
        >
          {ingress && ingress.map((rule: any) => (
            <SecurityGroupIngressRule
              key={rule.description}
              _rule={rule}
            />
          ))}
          {egress && egress.map((rule: any) => (
            <SecurityGroupEgressRule
              key={rule.description}
              _rule={rule}
            />
          ))}
        </SecurityGroupComponent>
      )
    }

    const SecurityGroupsComponent =
      _components?.securityGroups as typeof Shape || Shape
    return (
      <SecurityGroupsComponent
        {...props}
      >
        {Object.values(
          vpcConfig.securityGroups,
        ).map((securityGroup) => (
          <SecurityGroup
            key={securityGroup.name}
            _securityGroup={securityGroup}
          />
        ))}
      </SecurityGroupsComponent>
    )
  }

  const VpcComponent: any = _components?.vpc as typeof AwsVpc ||
    AwsVpc
  return (
    <VpcComponent
      _title={vpcConfig.name}
      tags={() => ({ Name: vpcConfig.name })}
      {...(vpcConfig as any)}
    >
      <PublicSubnets />
      <PrivateSubnets />
      <SecurityGroups />
      <InternetGateway />
      <DefaultRouteTable />
      {children}
    </VpcComponent>
  )
}
