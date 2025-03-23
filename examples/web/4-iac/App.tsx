import { Stack } from '../../../core/index.js'
import { ClientShape, Waf } from '../../../generated-drawio/index.js'

import {
  AwsCloud,
  AwsInstance,
  AwsLb,
  AwsPostgres,
  AwsPrivateSubnet,
  AwsPublicSubnet,
  AwsRegion,
  DataAwsVpc,
  useAwsSubnet,
  useAwsSubnets,
} from '../../../generated-aws/index.js'

const Postgres = (props: any) => <AwsPostgres {...props} />

const WebApp = (props: any) => <Stack {...props} />

const Client = (props: any) => (
  <ClientShape _dependsOn="Load Balancer" {...props} />
)

const Cloud = (props: any) => (
  <AwsCloud {...props}>
    <AwsRegion _display="invisible">
      <DataAwsVpc _display="invisible" id="vpcid1">
        {props.children}
      </DataAwsVpc>
    </AwsRegion>
  </AwsCloud>
)

const PublicSubnet = (props: any) => (
  <AwsPublicSubnet cidr_block="10.0.0.0/16" {...props} />
)

const PrivateSubnet = (props: any) => (
  <AwsPrivateSubnet cidr_block="10.10.0.0/16" {...props} />
)

const LoadBalancer = (props: any) => {
  const { awsSubnets } = useAwsSubnets()
  return (
    <AwsLb
      subnets={awsSubnets.map((s) => s.id)}
      _dependsOn={['Firewall', 'Application']}
      {...props}
    />
  )
}
const Firewall = (props: any) => <Waf {...props} />

const Application = (props: any) => {
  const { awsSubnet } = useAwsSubnet()
  return (
    <AwsInstance
      subnet_id={awsSubnet.id}
      ami="ami-005e54dee72cc1d00"
      _dependsOn="Postgres"
      {...props}
    />
  )
}

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
