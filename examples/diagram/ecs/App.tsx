import {
  Android,
  ApplicationLoadBalancer,
  ClientShape as Client,
  ElasticacheForRedis,
  GroupAwsCloudAlt,
  GroupEc2InstanceContents,
  GroupRegion,
  GroupSecurityGroup,
  GroupVpc2,
  RdsPostgresqlInstance,
  Waf,
} from '../../../generated-drawio/index.js'
import { type DiagramNodeProps, Shape } from '../../../core/index.js'

function Stack(props: DiagramNodeProps) {
  return <Shape {...props} />
}

function Cloud(props: DiagramNodeProps) {
  return <GroupAwsCloudAlt {...props} />
}

function Region(props: DiagramNodeProps) {
  return <GroupRegion {...props} />
}

function VPC(props: DiagramNodeProps) {
  return <GroupVpc2 {...props} />
}

function PublicSubnet(props: DiagramNodeProps) {
  return (
    <GroupSecurityGroup _color="#7AA116" _background="#F2F6E8" {...props} />
  )
}

function PrivateSubnet(props: DiagramNodeProps) {
  return (
    <GroupSecurityGroup _color="#00A4A6" _background="#E6F6F7" {...props} />
  )
}

function LoadBalancer(props: DiagramNodeProps) {
  return <ApplicationLoadBalancer {...props} />
}

function ECSCluster(props: DiagramNodeProps) {
  return <Shape _dashed={false} {...props} />
}

function ECSService(props: DiagramNodeProps) {
  return (
    <GroupEc2InstanceContents {...props}>
      <ECSContainer>{props.children}</ECSContainer>
    </GroupEc2InstanceContents>
  )
}

function ECSContainer(props: DiagramNodeProps) {
  return <Android {...props} />
}

function Postgres(props: DiagramNodeProps) {
  return <RdsPostgresqlInstance {...props} />
}

function Redis(props: DiagramNodeProps) {
  return <ElasticacheForRedis {...props} />
}

function StorageLayer(props: DiagramNodeProps) {
  return <Shape _display={'invisible'} {...props} />
}

export default function App() {
  return (
    <Stack title="Development Environment">
      <Client _dependsOn={'LoadBalancer'} />
      <Cloud>
        <Region>
          <VPC>
            <PublicSubnet>
              <LoadBalancer _dependsOn={['web', 'Waf']} />
              <Waf />
            </PublicSubnet>
            <PrivateSubnet>
              <ECSCluster _dependsOn={['Postgres', 'Redis']}>
                <ECSService>web</ECSService>
                <ECSService>job</ECSService>
                <ECSService _display="inactive">migration</ECSService>
              </ECSCluster>
              <StorageLayer>
                <Postgres />
                <Redis />
              </StorageLayer>
            </PrivateSubnet>
          </VPC>
        </Region>
      </Cloud>
    </Stack>
  )
}
