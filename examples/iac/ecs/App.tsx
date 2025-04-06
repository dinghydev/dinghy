import { type DiagramNodeProps, Shape, Stack } from '../../../core/index.ts'
import {
  AwsCloud,
  AwsECSCluster,
  AwsECSContainer,
  AwsECSService,
  AwsElasticacheCluster,
  AwsElasticacheClusterProps,
  AwsLb,
  AwsLbInputProps,
  AwsPostgres,
  AwsPrivateSubnet,
  AwsPublicSubnet,
  AwsRegion,
  AwsWAF,
  DataAwsVpc,
} from '../../../index.ts'
import { ClientShape as Client } from '../../../generated-drawio/index.ts'

function LoadBalancer(props: AwsLbInputProps) {
  return <AwsLb {...props} />
}

function Redis(props: AwsElasticacheClusterProps) {
  return <AwsElasticacheCluster engine='redis' {...props} />
}

function StorageLayer(props: DiagramNodeProps) {
  return <Shape _border={0} _color={{ color: 'none', fill: true }} {...props} />
}

function ECSApp(props: DiagramNodeProps) {
  return <Stack {...props} />
}

export function App() {
  return (
    <ECSApp>
      <Client _dependsOn={'LoadBalancer'} />
      <AwsCloud>
        <AwsRegion>
          <DataAwsVpc id='vpcid1'>
            <AwsPublicSubnet>
              <LoadBalancer _dependsOn={['AwsWAF', 'web']} />
              <AwsWAF />
            </AwsPublicSubnet>
            <AwsPrivateSubnet>
              <AwsECSCluster _dependsOn={['Postgres', 'Redis']}>
                <AwsECSService>
                  <AwsECSContainer>web</AwsECSContainer>
                </AwsECSService>
                <AwsECSService>
                  <AwsECSContainer>job</AwsECSContainer>
                </AwsECSService>
                <AwsECSService _display='inactive'>
                  <AwsECSContainer>migration</AwsECSContainer>
                </AwsECSService>
              </AwsECSCluster>
              <StorageLayer>
                <AwsPostgres _display='entity'>
                  {/*<Shape>TODO: Hidden</Shape>*/}
                </AwsPostgres>
                <Redis />
              </StorageLayer>
            </AwsPrivateSubnet>
          </DataAwsVpc>
        </AwsRegion>
      </AwsCloud>
    </ECSApp>
  )
}
