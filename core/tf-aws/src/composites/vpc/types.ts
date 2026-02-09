import {
  deepMerge,
  deepResolve,
  getRenderOptions,
  ResolvableNumberSchema,
} from '@dinghy/base-components'
import { z } from 'zod'
import { InputSchema as AwsVpcInputSchema } from '../../services/vpc/AwsVpc.tsx'
import { InputSchema as AwsSubnetInputSchema } from '../../services/vpc/AwsSubnet.tsx'
import { InputSchema as RuleInputSchema } from '../../services/vpc/AwsVpcSecurityGroupEgressRule.tsx'
import { useAwsProvider } from '../../foundation/AwsProvider.tsx'

const SubnetSchema = AwsSubnetInputSchema.extend({
  name: z.string().optional().transform((value: string | undefined) =>
    value as string
  ),
})
const SecurityGroupSchema = z.object({
  name: z.string().optional().transform((value: string | undefined) =>
    value as string
  ),
  ingress: RuleInputSchema.partial().array().optional(),
  egress: RuleInputSchema.partial().array().optional(),
})

const VpcSchema = AwsVpcInputSchema.extend({
  name: z.string().optional().transform((value: string | undefined) =>
    value as string
  ),
  publicSubnetsCount: ResolvableNumberSchema.default(1),
  privateSubnetsCount: ResolvableNumberSchema.default(0),
  publicSubnets: z.record(z.string(), SubnetSchema.loose()).default({}),
  privateSubnets: z.record(z.string(), SubnetSchema.loose()).default({}),
  securityGroups: z.record(z.string(), SecurityGroupSchema.loose())
    .default({}),
})

export type VpcType = z.output<typeof VpcSchema>
export type SubnetType = z.output<typeof SubnetSchema>
export function parseVpc(
  props: any,
): VpcType {
  const renderOptions = getRenderOptions()
  const { awsProvider } = useAwsProvider()
  const inputProps = deepMerge({}, renderOptions.vpc || {})
  deepMerge(inputProps, props.vpc || {})
  deepMerge(inputProps, props)
  const vpcConfig = VpcSchema.loose().parse(inputProps)

  if (!vpcConfig.cidr_block) {
    vpcConfig.cidr_block = `10.${renderOptions.stack.sequence}.0.0/16`
  }
  ;['public', 'private'].forEach((subnetType: string) => {
    const subnets = vpcConfig[`${subnetType}Subnets`] as Record<
      string,
      SubnetType
    >
    if (
      vpcConfig[`${subnetType}SubnetsCount`] !== 0 &&
      Object.keys(subnets as any).length === 0
    ) {
      const subnetCount = vpcConfig[`${subnetType}SubnetsCount`] as number
      for (let i = 0; i < subnetCount; i++) {
        subnets[String.fromCharCode(97 + i)] = {} as SubnetType
      }
    } else {
      vpcConfig[`${subnetType}SubnetsCount`] =
        Object.keys(subnets as any).length
    }
    Object.entries(subnets).map(([name, subnet], index: number) => {
      if (!subnet.name) {
        if (name.includes('-')) {
          subnet.name = name
        } else if (vpcConfig.name) {
          subnet.name = `${vpcConfig.name}-${subnetType}-${name}`
        } else {
          subnet.name = (() =>
            `${renderOptions.stack.name}-${subnetType}-${name}-subnet`) as unknown as string
        }
      }
      if (!subnet.availability_zone && !subnet.availability_zone_id) {
        subnet.availability_zone = (() =>
          `${deepResolve(awsProvider.region)}${
            String.fromCharCode(97 + index)
          }`) as unknown as string
      }
      if (!subnet.cidr_block) {
        subnet.cidr_block = `10.${renderOptions.stack.sequence}.${
          index * 10 + (subnetType === 'public' ? 200 : 10)
        }.0/24`
      }
    })
  })
  if (
    vpcConfig.publicSubnetsCount !== 0 &&
    Object.keys(vpcConfig.securityGroups).length === 0
  ) {
    vpcConfig.securityGroups['public-web-traffic'] = {
      ingress: [
        {
          description: 'Allow HTTP traffic from the internet',
          from_port: 80,
          to_port: 80,
          ip_protocol: 'tcp',
          cidr_ipv4: '0.0.0.0/0',
        },
        {
          description: 'Allow HTTPS traffic from the internet',
          from_port: 443,
          to_port: 443,
          ip_protocol: 'tcp',
          cidr_ipv4: '0.0.0.0/0',
        },
      ],
      egress: [
        {
          description: 'Allow All traffic to the internet',
          from_port: 0,
          to_port: 0,
          ip_protocol: '-1',
          cidr_ipv4: '0.0.0.0/0',
        },
      ],
    } as any
  }
  Object.entries(vpcConfig.securityGroups).map(([name, securityGroup]) => {
    securityGroup.name ??= name
  })
  vpcConfig.name ??=
    (() => `${renderOptions.stack.name}-vpc`) as unknown as string

  return vpcConfig
}
