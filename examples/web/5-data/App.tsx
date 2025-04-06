import { Shape, Stack, useRenderOptions } from '@reactiac/base-components'
import {
  ClientShape,
  GroupOnPremise,
  RdsPostgresqlInstance,
  Waf,
} from '@reactiac/standard-components-diagrams'

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
} from '@reactiac/standard-components-tf-aws'

const isLocal = () => {
  const { stack } = useRenderOptions()
  return stack?.env === 'local'
}

const WebApp = (props: any) => <Stack {...props} />

const Client = (props: any) => <ClientShape {...props} />

const Cloud = (props: any) => (
  <AwsCloud {...props}>
    <AwsRegion _display='invisible' region='eu-west-1'>
      <DataAwsVpc _display='invisible' id='vpcid1'>
        <PublicSubnet>
          <LoadBalancer />
          <Firewall />
        </PublicSubnet>
        <PrivateSubnet>
          <Application />
          <Postgres />
        </PrivateSubnet>
      </DataAwsVpc>
    </AwsRegion>
  </AwsCloud>
)

const PublicSubnet = (props: any) => (
  <AwsPublicSubnet cidr_block='10.0.0.0/16' {...props} />
)

const PrivateSubnet = (props: any) => (
  <AwsPrivateSubnet cidr_block='10.10.0.0/16' {...props} />
)

const LoadBalancer = (props: any) => {
  const { awsSubnets } = useAwsSubnets()
  return (
    <AwsLb
      _dependsBy='Client'
      _dependsOn={['Firewall', 'Application']}
      subnets={awsSubnets.map((s) => s.id)}
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
      ami='ami-005e54dee72cc1d00'
      _dependsOn='Postgres'
      {...props}
    />
  )
}

const Postgres = (props: any) => <AwsPostgres {...props} />

const Deno = (props: any) => <Shape {...props} />

const Docker = (props: any) => <Shape {...props} />

const ViteDev = (props: any) => (
  <Shape
    _image='https://vite.dev/logo.svg'
    _dependsBy='Client'
    _dependsOn='RdsPostgresqlInstance'
    {...props}
  />
)

const Local = (props: any) => (
  <GroupOnPremise {...props}>
    <Deno>
      <ViteDev />
    </Deno>
    <Docker>
      <RdsPostgresqlInstance>Postgres</RdsPostgresqlInstance>
    </Docker>
  </GroupOnPremise>
)

export function App() {
  return (
    <WebApp>
      <Client />
      {isLocal() ? <Local /> : <Cloud />}
    </WebApp>
  )
}
