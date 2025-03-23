import {
  Dependency,
  type NodeProps,
  Shape,
  Stack,
} from '../../../core/index.js'
import {
  AwsCloud,
  AwsRegion,
  DataAwsAcmCertificate,
  DataAwsRoute53Zone,
} from '../../../generated-aws/index.js'
import { ClientShape as Client } from '../../../generated-drawio/index.js'
import {
  AwsBackend,
  AwsLogBucket,
  S3CloudfrontSite,
  S3CloudfrontSiteInputProps,
} from '../../../pro-aws/index.js'

const ReactIACWebsite = (props: NodeProps) => (
  <Stack title="ReactIAC Website" {...props} />
)

const GlobalRegion = (props: NodeProps) => (
  <AwsRegion _direction="vertical" {...props} />
)

const Shared = (props: NodeProps) => <Shape _distribution="even" {...props} />

const Sites = (props: NodeProps) => (
  <Shape _dependsBy={'Client'} {...props}>
    <Dependency _dependsOn="logs" _display={'inactive'} />
    {props.children}
  </Shape>
)

const Site = (props: S3CloudfrontSiteInputProps) => (
  <Shape _display="invisible" _direction="vertical" _name={props.subdomain}>
    <S3CloudfrontSite
      bucketVersions={[
        'v1',
        //'v2',
      ]}
      {...props}
    />
  </Shape>
)

export default function App() {
  return (
    <ReactIACWebsite>
      <Client />
      <AwsCloud>
        <GlobalRegion>
          <Sites>
            <Site subdomain="WWW" />
            <Site subdomain="play" />
            <Site subdomain="cdn" />
          </Sites>
          <Shared>
            <DataAwsRoute53Zone name="reactiac.dev" />
            <DataAwsAcmCertificate domain="reactiac.dev" />
            <AwsBackend />
            <AwsLogBucket surfix="logs" />
          </Shared>
        </GlobalRegion>
      </AwsCloud>
    </ReactIACWebsite>
  )
}
