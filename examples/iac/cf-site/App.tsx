import {
  Dependency,
  type NodeProps,
  Shape,
  Stack,
} from "@diac/base-components";

import {
  AwsCloud,
  AwsRegion,
  DataAwsAcmCertificate,
  DataAwsRoute53Zone,
  LogBucket,
  S3Backend,
  S3CloudfrontSite,
} from "../../../core/standard-components/standard-components-tf-aws/src/index.ts";
import { Client as Client } from "../../../core/standard-components/standard-components-diagrams/src/index.ts";

const DIaCWebsite = (props: NodeProps) => (
  <Stack title="DIaC Website" {...props} />
);

const GlobalRegion = (props: NodeProps) => (
  <AwsRegion _direction="vertical" region="us-east-1" {...props} />
);

const Shared = (props: NodeProps) => <Shape _distribution="even" {...props} />;

const Sites = (props: NodeProps) => (
  <Shape _dependsBy={"Client"} {...props}>
    <Dependency _dependsOn="logs" _display={"inactive"} />
    {props.children}
  </Shape>
);

const Site = (props: any) => (
  <Shape _display="invisible" _direction="vertical" _name={props.subdomain}>
    <S3CloudfrontSite
      bucketVersions={[
        "v1",
        //'v2',
      ]}
      {...props}
    />
  </Shape>
);

export function App() {
  return (
    <DIaCWebsite>
      <Client />
      <AwsCloud>
        <GlobalRegion>
          <Sites>
            <Site subdomain="WWW" />
            <Site subdomain="play" />
            <Site subdomain="cdn" />
          </Sites>
          <Shared>
            <DataAwsRoute53Zone name="diac.dev" />
            <DataAwsAcmCertificate domain="diac.dev" />
            <S3Backend />
            <LogBucket surfix="logs" />
          </Shared>
        </GlobalRegion>
      </AwsCloud>
    </DIaCWebsite>
  );
}
