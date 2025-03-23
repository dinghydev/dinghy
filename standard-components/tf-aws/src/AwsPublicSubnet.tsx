import AwsSubnet, {
  AwsSubnetInputProps,
  AwsSubnetOutputProps,
} from './AwsSubnet.js'
import {
  useTypedNode,
  useTypedNodes,
} from '@reactiac/base-components'

export default function AwsPublicSubnet(props: AwsSubnetInputProps) {
  return (
    <AwsSubnet
      _color='#7AA116'
      _background='#F2F6E8'
      {...props}
    />
  )
}

export const useAwsPublicSubnet = () =>
  useTypedNode<AwsSubnetOutputProps>(AwsPublicSubnet)
export const useAwsPublicSubnets = () =>
  useTypedNodes<AwsSubnetOutputProps>(AwsPublicSubnet)
