import {
  deepMerge,
  deepResolve,
  getRenderOptions,
  ResolvableNumberSchema,
} from '@dinghy/base-components'
import { z } from 'zod'
import { InputSchema as AwsVpcInputSchema } from '../../services/vpc/AwsVpc.tsx'
import { InputSchema as AwsSubnetInputSchema } from '../../services/vpc/AwsSubnet.tsx'
import { useAwsProvider } from '../../foundation/AwsProvider.tsx'

const SubnetSchema = AwsSubnetInputSchema.extend({
  name: z.string().optional().transform((value: string | undefined) =>
    value as string
  ),
})

const VpcSchema = AwsVpcInputSchema.extend({
  name: z.string().optional().transform((value: string | undefined) =>
    value as string
  ),
  publicSubnetsCount: ResolvableNumberSchema.default(1),
  privateSubnetsCount: ResolvableNumberSchema.default(0),
  publicSubnets: z.record(z.string(), SubnetSchema.loose()).default({}),
  privateSubnets: z.record(z.string(), SubnetSchema.loose()).default({}),
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
  vpcConfig.name ??=
    (() => `${renderOptions.stack.name}-vpc`) as unknown as string

  return vpcConfig
}
