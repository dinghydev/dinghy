import { Shape } from "@dinghy/base-components";
import { Android } from "@dinghy/standard-components-diagrams/aws17Sdk";
import * as awsGeneralResources from "@dinghy/standard-components-diagrams/awsGeneralResources";
import * as awsGroups from "@dinghy/standard-components-diagrams/awsGroups";
import { PostgreSqlInstance } from "@dinghy/standard-components-diagrams/awsDatabase";
import { ApplicationLoadBalancer } from "@dinghy/standard-components-diagrams/awsNetworkContentDelivery";
import { Waf } from "@dinghy/standard-components-diagrams/awsSecurityIdentityCompliance";

const Postgres = (props: any) => <PostgreSqlInstance {...props} />;

const WebApp = (props: any) => <Shape {...props} />;

const Cloud = (props: any) => <awsGroups.AwsCloud {...props} />;

const PublicSubnet = (props: any) => (
  <awsGroups.PublicSubnet _direction="vertical" {...props} />
);

const PrivateSubnet = (props: any) => (
  <awsGroups.PrivateSubnet _direction="vertical" {...props} />
);

const LoadBalancer = (props: any) => (
  <ApplicationLoadBalancer
    _dependsOn={["Firewall", "Application"]}
    {...props}
  />
);

const Firewall = (props: any) => (
  <Waf
    _style={{
      strokeColor: "blue",
      fillColor: "transparent",
    }}
    {...props}
  />
);

const Application = (props: any) => (
  <Android
    _dependsOn="Postgres"
    {...props}
  />
);

const Client = (props: any) => (
  <awsGeneralResources.Client
    _dependsOn="Load Balancer"
    {...props}
  />
);

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
