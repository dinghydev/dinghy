import React from 'react'
import { Shape } from '@reactiac/base-components'

import {
  Android,
  ApplicationLoadBalancer,
  ClientShape,
  GroupAwsCloudAlt,
  GroupSecurityGroup,
  RdsPostgresqlInstance,
  Waf,
} from '@reactiac/standard-components-diagrams'

const Postgres = (props: any) => <RdsPostgresqlInstance {...props} />

const WebApp = (props: any) => <Shape {...props} />

const Client = (props: any) => (
  <ClientShape _dependsOn="Load Balancer" {...props} />
)

const Cloud = (props: any) => <GroupAwsCloudAlt {...props} />

const Subnet = (props: any) => (
  <GroupSecurityGroup _direction="vertical" {...props} />
)

const PublicSubnet = (props: any) => (
  <Subnet _color="#7AA116" _background="#F2F6E8" {...props} />
)

const PrivateSubnet = (props: any) => (
  <Subnet _color="#00A4A6" _background="#E6F6F7" {...props} />
)

const LoadBalancer = (props: any) => (
  <ApplicationLoadBalancer
    _dependsOn={['Firewall', 'Application']}
    {...props}
  />
)

const Firewall = (props: any) => <Waf {...props} />

const Application = (props: any) => <Android _dependsOn="Postgres" {...props} />

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
