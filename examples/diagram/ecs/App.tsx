import {
  AwsCloud,
  Ec2InstanceContents,
  Region,
  Vpc,
} from "@dinghy/diagrams/awsGroups";
import { type DiagramNodeProps, Shape } from "@dinghy/base-components";
import { ApplicationLoadBalancer } from "@dinghy/diagrams/awsNetworkContentDelivery";
import { Client } from "@dinghy/diagrams/awsGeneralResources";
import { Android } from "@dinghy/diagrams/aws17Sdk";
import {
  ElasticacheForRedis,
  PostgreSqlInstance,
} from "@dinghy/diagrams/awsDatabase";
import { Waf } from "@dinghy/diagrams/awsSecurityIdentityCompliance";
function Stack(props: DiagramNodeProps) {
  return <Shape {...props} />;
}

function Cloud(props: DiagramNodeProps) {
  return <AwsCloud {...props} />;
}

function PublicSubnet(props: DiagramNodeProps) {
  return (
    <Shape
      _direction="vertical"
      _color="#7AA116"
      _background="#F2F6E8"
      {...props}
    />
  );
}

function PrivateSubnet(props: DiagramNodeProps) {
  return (
    <Shape
      _direction="vertical"
      _color="#00A4A6"
      _background="#E6F6F7"
      {...props}
    />
  );
}

function LoadBalancer(props: DiagramNodeProps) {
  return (
    <ApplicationLoadBalancer
      _width={60}
      _height={60}
      _diagram={{
        dimension: {
          margin: {
            bottom: 60,
          },
        },
      }}
      {...props}
    />
  );
}

function ECSCluster(props: DiagramNodeProps) {
  return (
    <Shape
      _dashed
      {...props}
      _diagram={{
        dimension: {
          margin: {
            bottom: 60,
          },
        },
      }}
    />
  );
}

function ECSService(props: DiagramNodeProps) {
  return (
    <Ec2InstanceContents {...props}>
      <ECSContainer>{props.children}</ECSContainer>
    </Ec2InstanceContents>
  );
}

function ECSContainer(props: DiagramNodeProps) {
  return <Android _width={60} _height={60} {...props} />;
}

function Postgres(props: DiagramNodeProps) {
  return <PostgreSqlInstance _width={60} _height={60} {...props} />;
}

function Redis(props: DiagramNodeProps) {
  return <ElasticacheForRedis _width={60} _height={60} {...props} />;
}

function User(props: DiagramNodeProps) {
  return <Client _width={60} _height={60} {...props} />;
}

function WAF(props: DiagramNodeProps) {
  return <Waf _width={60} _height={60} {...props} />;
}

function StorageLayer(props: DiagramNodeProps) {
  return <Shape _display={"invisible"} {...props} />;
}

export function App() {
  return (
    <Stack title="Development Environment">
      <User _dependsOn={"LoadBalancer"} />
      <Cloud>
        <Region>
          <Vpc>
            <PublicSubnet>
              <LoadBalancer _dependsOn={["web", "WAF"]} />
              <WAF />
            </PublicSubnet>
            <PrivateSubnet>
              <ECSCluster _dependsOn={["Postgres", "Redis"]}>
                <ECSService>web</ECSService>
                <ECSService>job</ECSService>
                <ECSService _dashed>migration</ECSService>
              </ECSCluster>
              <StorageLayer>
                <Postgres />
                <Redis />
              </StorageLayer>
            </PrivateSubnet>
          </Vpc>
        </Region>
      </Cloud>
    </Stack>
  );
}
