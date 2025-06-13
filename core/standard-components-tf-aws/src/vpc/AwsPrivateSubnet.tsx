import { useTypedNode, useTypedNodes } from '@reactiac/base-components'
import {
  AwsSubnet,
  type AwsSubnetInputProps,
  type AwsSubnetOutputProps,
} from './AwsSubnet.tsx'

export function AwsPrivateSubnet(props: AwsSubnetInputProps) {
  return <AwsSubnet _color='#00A4A6' _background='#E6F6F7' {...props} />
}

export const useAwsPrivateSubnet = () =>
  useTypedNode<AwsSubnetOutputProps>(AwsPrivateSubnet)
export const useAwsPrivateSubnets = () =>
  useTypedNodes<AwsSubnetOutputProps>(AwsPrivateSubnet)
