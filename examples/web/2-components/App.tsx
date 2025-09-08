import { Shape } from "@dinghy/base-components";

const WebApp = (props: any) => <Shape {...props} />;

const Client = (props: any) => <Shape _dependsOn="Load Balancer" {...props} />;

const Cloud = (props: any) => <Shape {...props} />;

const Subnet = (props: any) => <Shape _direction="vertical" {...props} />;

const PublicSubnet = (props: any) => <Subnet {...props} />;

const PrivateSubnet = (props: any) => <Subnet {...props} />;

const LoadBalancer = (props: any) => (
  <Shape _dependsOn={["Firewall", "Application"]} {...props} />
);

const Application = (props: any) => <Shape _dependsOn="Postgres" {...props} />;

const Firewall = (props: any) => <Shape {...props} />;

const Postgres = (props: any) => <Shape {...props} />;

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
