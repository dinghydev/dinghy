import {
  Android,
  ApplicationLoadBalancer,
  Client as Client,
  ElasticacheForRedis,
  GroupAwsCloudAlt,
  GroupEc2InstanceContents,
  GroupOnPremise,
  GroupRegion,
  GroupSecurityGroup,
  GroupVpc2,
  RdsPostgresqlInstance,
  Waf,
} from '../../../generated-drawio/index.ts'
import {
  type DiagramNodeProps,
  IacNodeProps,
  Shape,
} from '../../../core/index.ts'

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
    <GroupSecurityGroup _color='#7AA116' _background='#F2F6E8' {...props} />
  )
}

function PrivateSubnet(props: DiagramNodeProps) {
  return <GroupSecurityGroup _color='red' _background='#E6F6F7' {...props} />
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
      {props.children}
    </GroupEc2InstanceContents>
  )
}

function Application(props: DiagramNodeProps) {
  return <Android {...props} />
}

function Postgres(props: DiagramNodeProps) {
  return <RdsPostgresqlInstance {...props} />
}

function Redis(props: DiagramNodeProps) {
  return <ElasticacheForRedis {...props} />
}

function ECSTask(props: IacNodeProps) {
  return <GroupOnPremise _direction={'vertical'} {...props} />
}

function StorageLayer(props: DiagramNodeProps) {
  return <Shape _border={0} _display={'invisible'} {...props} />
}

export function App() {
  return (
    <Stack title='Development Environment'>
      <Client />
      <Cloud>
        <Region>
          <VPC>
            <PublicSubnet>
              <LoadBalancer _dependsBy={'Client'} />
            </PublicSubnet>
            <PrivateSubnet>
              <ECSCluster>
                <ECSService>
                  <ECSTask>
                    <Application
                      _dependsBy={'LoadBalancer'}
                      _dependsOn={['Postgres', 'Redis']}
                    />
                    <StorageLayer>
                      <Postgres />
                      <Redis />
                    </StorageLayer>
                  </ECSTask>
                </ECSService>
              </ECSCluster>
            </PrivateSubnet>
          </VPC>
        </Region>
      </Cloud>
    </Stack>
  )
}
