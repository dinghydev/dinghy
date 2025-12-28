import { extendStyle, Shape } from '@dinghy/base-components'
import * as awsGeneralResources from '@dinghy/diagrams/entitiesAwsGeneralResources'
import {
  PRIVATE_SUBNET,
  PUBLIC_SUBNET,
} from '@dinghy/diagrams/containersAwsGroups'
import { Waf } from '@dinghy/diagrams/entitiesAwsSecurityIdentityCompliance'
import { POSTGRE_SQL_INSTANCE } from '@dinghy/diagrams/entitiesAwsDatabase'

import { AwsProvider } from '@dinghy/tf-aws'
import { AwsLb } from '@dinghy/tf-aws/serviceElbv2'
import {
  AwsSubnet,
  DataAwsVpc,
  useAwsSubnet,
  useAwsSubnets,
  useAwsVpc,
} from '@dinghy/tf-aws/serviceVpc'
import { AwsInstance } from '@dinghy/tf-aws/serviceEc2'
import { AwsDbInstance } from '@dinghy/tf-aws/serviceRds'

export default function App() {
  return (
    <WebApp>
      <Client />
      <Cloud>
        <PublicSubnet>
          <LoadBalancer />
          <Firewall />
        </PublicSubnet>
        <PrivateSubnet>
          <Application />
          <Postgres />
        </PrivateSubnet>
      </Cloud>
    </WebApp>
  )
}

const Postgres = (props: any) => (
  <AwsDbInstance
    instance_class='db.t3.micro'
    {...props}
    _style={extendStyle(props, POSTGRE_SQL_INSTANCE)}
  />
)

const WebApp = (props: any) => <Shape {...props} />

const Client = (props: any) => (
  <awsGeneralResources.Client _dependsOn='LoadBalancer' {...props} />
)

const Cloud = (props: any) => (
  <AwsProvider region='eu-west-1' {...props}>
    <DataAwsVpc _display='invisible'>
      {props.children}
    </DataAwsVpc>
  </AwsProvider>
)

const PublicSubnet = (props: any) => (
  <AwsSubnet
    cidr_block='10.0.0.0/16'
    vpc_id={useAwsVpc().awsVpc.id}
    _direction='vertical'
    {...props}
    _style={extendStyle(props, PUBLIC_SUBNET)}
  />
)

const PrivateSubnet = (props: any) => (
  <AwsSubnet
    cidr_block='10.10.0.0/16'
    vpc_id={useAwsVpc().awsVpc.id}
    _direction='vertical'
    {...props}
    _style={extendStyle(props, PRIVATE_SUBNET)}
  />
)

const LoadBalancer = (props: any) => {
  const { awsSubnets } = useAwsSubnets()
  const { awsVpc } = useAwsVpc()
  return (
    <AwsLb
      vpc_id={awsVpc.id}
      subnets={() => awsSubnets.map((s) => s.id)}
      _dependsOn={['Firewall', 'Application']}
      {...props}
    />
  )
}
const Firewall = (props: any) => (
  <Waf
    _style={{
      strokeColor: 'blue',
      fillColor: 'transparent',
    }}
    {...props}
  />
)

const Application = (props: any) => {
  const { awsSubnet } = useAwsSubnet()
  return (
    <AwsInstance
      subnet_id={awsSubnet.id}
      ami='ami-005e54dee72cc1d00'
      _dependsOn='Postgres'
      {...props}
    />
  )
}
