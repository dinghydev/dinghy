import { Shape } from "@reactiac/base-components";

import {
  Android,
  ApplicationLoadBalancer,
  Client,
  GroupAwsCloudAlt,
  GroupSecurityGroup,
  RdsPostgresqlInstance,
  Waf,
} from "../../../core/standard-components/standard-components-diagrams/src/index.ts";

const Postgres = (props: any) => <RdsPostgresqlInstance {...props} />;

const WebApp = (props: any) => <Shape {...props} />;

const Client = (props: any) => <Client _dependsOn="Load Balancer" {...props} />;

const Cloud = (props: any) => <GroupAwsCloudAlt {...props} />;

const Subnet = (props: any) => (
  <GroupSecurityGroup _direction="vertical" {...props} />
);

const PublicSubnet = (props: any) => (
  <Subnet _color="#7AA116" _background="#F2F6E8" {...props} />
);

const PrivateSubnet = (props: any) => (
  <Subnet _color="#00A4A6" _background="#E6F6F7" {...props} />
);

const LoadBalancer = (props: any) => (
  <ApplicationLoadBalancer
    _dependsOn={["Firewall", "Application"]}
    {...props}
  />
);

const Firewall = (props: any) => <Waf {...props} />;

const Application = (props: any) => <Android
  _dependsOn="Postgres"
  {...props}
/>;

export function App() {
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
  );
}
