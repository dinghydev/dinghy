import {
  AwsCloud,
  Ec2InstanceContents,
  Region,
  Vpc,
} from '@dinghy/diagrams/containersAwsGroups'
import { type NodeProps, Shape } from '@dinghy/base-components'
import { ApplicationLoadBalancer } from '@dinghy/diagrams/entitiesAwsNetworkContentDelivery'
import { Client } from '@dinghy/diagrams/entitiesAwsGeneralResources'
import { Android } from '@dinghy/diagrams/entitiesAws17Sdk'
import {
  ElasticacheForRedis,
  PostgreSqlInstance,
} from '@dinghy/diagrams/entitiesAwsDatabase'
import { Waf } from '@dinghy/diagrams/entitiesAwsSecurityIdentityCompliance'

export default () => (
  <Shape title='ECS architecture diagram'>
    <User _dependsOn={'LoadBalancer'} />
    <Cloud>
      <Region>
        <Vpc>
          <PublicSubnet>
            <LoadBalancer _dependsOn={['web', 'WAF']} />
            <WAF />
          </PublicSubnet>
          <PrivateSubnet>
            <ECSCluster _dependsOn={['Postgres', 'Redis']}>
              <ECSService>web</ECSService>
              <ECSService>job</ECSService>
              <ECSService _display='inactive'>migration</ECSService>
            </ECSCluster>
            <StorageLayer>
              <Postgres />
              <Redis />
            </StorageLayer>
          </PrivateSubnet>
        </Vpc>
      </Region>
    </Cloud>
  </Shape>
)

function Cloud(props: NodeProps) {
  return <AwsCloud {...props} />
}

function PublicSubnet(props: NodeProps) {
  return (
    <Shape
      _direction='vertical'
      _color='#7AA116'
      _background='#F2F6E8'
      {...props}
    />
  )
}

function PrivateSubnet(props: NodeProps) {
  return (
    <Shape
      _direction='vertical'
      _color='#00A4A6'
      _background='#E6F6F7'
      {...props}
    />
  )
}

function LoadBalancer(props: NodeProps) {
  return (
    <ApplicationLoadBalancer
      _margin={{
        bottom: 120,
      }}
      {...props}
    />
  )
}

function ECSCluster(props: NodeProps) {
  return (
    <Shape
      _display='inactive'
      {...props}
      _margin={{
        bottom: 60,
      }}
    />
  )
}

function ECSService(props: NodeProps) {
  return (
    <Ec2InstanceContents {...props}>
      <ECSContainer>{props.children}</ECSContainer>
    </Ec2InstanceContents>
  )
}

function ECSContainer(props: NodeProps) {
  return <Android _width={60} _height={60} {...props} />
}

function Postgres(props: NodeProps) {
  return <PostgreSqlInstance _width={60} _height={60} {...props} />
}

function Redis(props: NodeProps) {
  return <ElasticacheForRedis _width={60} _height={60} {...props} />
}

function User(props: NodeProps) {
  return <Client _width={60} _height={60} {...props} />
}

function WAF(props: NodeProps) {
  return <Waf _width={60} _height={60} {...props} />
}

function StorageLayer(props: NodeProps) {
  return <Shape _display={'invisible'} {...props} />
}
