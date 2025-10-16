// GENERATED FILE: DO NOT EDIT
import { ExampleType } from "./types.ts";
import { default as web_1_shape } from "./web/1-shape/App.ts";

//import web_1_shape_spec from './web/1-shape/example.yaml'
import { default as web_2_components } from "./web/2-components/App.ts";

//import web_2_components_spec from './web/2-components/example.yaml'
import { default as web_3_drawio } from "./web/3-drawio/App.ts";

//import web_3_drawio_spec from './web/3-drawio/example.yaml'
import { default as web_4_iac } from "./web/4-iac/App.ts";

//import web_4_iac_spec from './web/4-iac/example.yaml'
import { default as web_5_data } from "./web/5-data/App.ts";

//import web_5_data_spec from './web/5-data/example.yaml'
import { default as diagram_ecs } from "./diagram/ecs/App.ts";

//import diagram_ecs_spec from './diagram/ecs/example.yaml'
import { default as diagram_ecs2 } from "./diagram/ecs2/App.ts";

//import diagram_ecs2_spec from './diagram/ecs2/example.yaml'
import { default as diagram_layout_mindmap } from "./diagram/layout/mindmap/App.ts";

//import diagram_layout_mindmap_spec from './diagram/layout/mindmap/example.yaml'
import { default as diagram_modules } from "./diagram/modules/App.ts";

//import diagram_modules_spec from './diagram/modules/example.yaml'
import { default as iac_cf_site } from "./iac/cf-site/App.ts";

//import iac_cf_site_spec from './iac/cf-site/example.yaml'
import { default as iac_ecs } from "./iac/ecs/App.ts";

//import iac_ecs_spec from './iac/ecs/example.yaml'

export const allExamples: Record<string, ExampleType> = {
  "step-by-step-1-shape": {
    title: "Step 1: Shape",
    slag: "step-by-step-1-shape",
    packagePath: "web/1-shape",
    outputPath: "./packages/examples/web/1-shape/output",
    order: 100,
    code: `import { Shape } from 'dinghy-core'

export function App() {
  return (
    <Shape>
      Web App
      <Shape _dependsOn='Load Balancer'>Client</Shape>
      <Shape>
        Cloud
        <Shape _direction='vertical'>
          Public Subnet
          <Shape _dependsOn={'Application'}>Load Balancer</Shape>
          <Shape _dependsBy={'Load Balancer'}>Firewall</Shape>
        </Shape>
        <Shape _direction='vertical'>
          Private Subnet
          <Shape _dependsOn='Postgres'>Application</Shape>
          <Shape>Postgres</Shape>
        </Shape>
      </Shape>
    </Shape>
  )
}
`,
    //options: web_1_shape_spec.options,
    options: { diagramOptions: { dimension: { boxWidth: 60, boxHeight: 60 } } },
    App: web_1_shape,
  },
  "step-by-step-2-components": {
    title: "Step 2: Components",
    slag: "step-by-step-2-components",
    packagePath: "web/2-components",
    outputPath: "./packages/examples/web/2-components/output",
    order: 100,
    code: `import { Shape } from 'dinghy-core'

const WebApp = (props: any) => <Shape {...props} />

const Client = (props: any) => <Shape
  _dependsOn='Load Balancer'
  {...props}
/>

const Cloud = (props: any) => <Shape {...props} />

const Subnet = (props: any) =>
  <Shape
    _direction='vertical'
    {...props}
  />

const PublicSubnet = (props: any) => <Subnet {...props} />

const PrivateSubnet = (props: any) => <Subnet {...props} />

const LoadBalancer = (props: any) =>
  <Shape
    _dependsOn={['Firewall', 'Application']}
    {...props}
  />

const Application = (props: any) =>
  <Shape
    _dependsOn='Postgres'
    {...props}
  />

const Firewall = (props: any) => <Shape {...props} />

const Postgres = (props: any) => <Shape {...props} />

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
  )
}
`,
    //options: web_2_components_spec.options,
    options: { diagramOptions: { dimension: { boxWidth: 60, boxHeight: 60 } } },
    App: web_2_components,
  },
  "step-by-step-3-drawio": {
    title: "Step 3: Drawio diagram",
    slag: "step-by-step-3-drawio",
    packagePath: "web/3-drawio",
    outputPath: "./packages/examples/web/3-drawio/output",
    order: 100,
    code: `import { Shape } from 'dinghy-core'

import {
  Android,
  ApplicationLoadBalancer,
  Client,
  GroupAwsCloudAlt,
  GroupSecurityGroup,
  RdsPostgresqlInstance,
  Waf,
} from 'dinghy-components-generated-drawio'

const Postgres = (props: any) => <RdsPostgresqlInstance {...props} />

const WebApp = (props: any) => <Shape {...props} />

const Client = (props: any) =>
  <Client
    _dependsOn='Load Balancer'
    {...props}
  />

const Cloud = (props: any) => <GroupAwsCloudAlt {...props} />

const Subnet = (props: any) =>
  <GroupSecurityGroup
    _direction='vertical'
    {...props}
  />

const PublicSubnet = (props: any) =>
  <Subnet
    _color='#7AA116'
    _background='#F2F6E8'
    {...props}
  />

const PrivateSubnet = (props: any) =>
  <Subnet
    _color='#00A4A6'
    _background='#E6F6F7'
    {...props}
  />

const LoadBalancer = (props: any) =>
  <ApplicationLoadBalancer
    _dependsOn={['Firewall', 'Application']}
    {...props}
  />

const Firewall = (props: any) => <Waf {...props} />

const Application = (props: any) =>
  <Android
    _dependsOn='Postgres'
    {...props}
  />

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
  )
}
`,
    //options: web_3_drawio_spec.options,
    options: { diagramOptions: { dimension: { boxWidth: 60, boxHeight: 60 } } },
    App: web_3_drawio,
  },
  "step-by-step-4-iac": {
    title: "Step 4: Terraform IaC",
    slag: "step-by-step-4-iac",
    packagePath: "web/4-iac",
    outputPath: "./packages/examples/web/4-iac/output",
    order: 100,
    code: `import { Stack } from 'dinghy-core'
import { Client, Waf } from 'dinghy-components-generated-drawio'

import {
  AwsCloud,
  AwsInstance,
  AwsLb,
  AwsPostgres,
  AwsPrivateSubnet,
  AwsPublicSubnet,
  AwsRegion,
  DataAwsVpc,
  useAwsSubnet,
  useAwsSubnets,
} from 'dinghy-components-generated-aws'

const Postgres = (props: any) => <AwsPostgres {...props} />

const WebApp = (props: any) => <Stack {...props} />

const Client = (props: any) =>
  <Client
    _dependsOn='Load Balancer'
    {...props}
  />

const Cloud = (props: any) =>
  <AwsCloud
    {...props}
  >
    <AwsRegion _display='invisible'>
      <DataAwsVpc
        _display='invisible'
        id='vpcid1'
      >
        {props.children}
      </DataAwsVpc>
    </AwsRegion>
  </AwsCloud>

const PublicSubnet = (props: any) =>
  <AwsPublicSubnet
    cidr_block='10.0.0.0/16'
    {...props}
  />

const PrivateSubnet = (props: any) =>
  <AwsPrivateSubnet
    cidr_block='10.10.0.0/16'
    {...props}
  />

const LoadBalancer = (props: any) => {
  const {awsSubnets} = useAwsSubnets()
  return (
    <AwsLb
      subnets={awsSubnets.map((s) => s.id)}
      _dependsOn={['Firewall', 'Application']}
      {...props}
    />
  )
}
const Firewall = (props: any) => <Waf {...props} />

const Application = (props: any) => {
  const {awsSubnet} = useAwsSubnet()
  return (
    <AwsInstance
      subnet_id={awsSubnet.id}
      ami='ami-005e54dee72cc1d00'
      _dependsOn='Postgres'
      {...props}
    />
  )
}

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
  )
}
`,
    //options: web_4_iac_spec.options,
    options: {
      diagramOptions: { dimension: { boxWidth: 60, boxHeight: 60 } },
      iacOptions: { provider: "opentofu" },
    },
    App: web_4_iac,
  },
  "step-by-step-5-data": {
    title: "Step 5: Data layer",
    slag: "step-by-step-5-data",
    packagePath: "web/5-data",
    outputPath: "./packages/examples/web/5-data/output",
    order: 100,
    code: `import { Shape, Stack, useRenderOptions, } from 'dinghy-core'
import {
  Client,
  GroupOnPremise,
  RdsPostgresqlInstance,
  Waf,
} from 'dinghy-components-generated-drawio'

import {
  AwsCloud,
  AwsInstance,
  AwsLb,
  AwsPostgres,
  AwsPrivateSubnet,
  AwsPublicSubnet,
  AwsRegion,
  DataAwsVpc,
  useAwsSubnet,
  useAwsSubnets,
} from 'dinghy-components-generated-aws'

const isLocal = () => {
  const {stack} = useRenderOptions()
  return stack?.env === 'local'
}

const WebApp = (props: any) => <Stack {...props} />

const Client = (props: any) => <Client  {...props} />

const Cloud = (props: any) =>
  <AwsCloud {...props}>
    <AwsRegion _display='invisible'>
      <DataAwsVpc
        _display='invisible'
        id='vpcid1'
      >
        <PublicSubnet>
          <LoadBalancer />
          <Firewall />
        </PublicSubnet>
        <PrivateSubnet>
          <Application />
          <Postgres />
        </PrivateSubnet>
      </DataAwsVpc>
    </AwsRegion>
  </AwsCloud>

const PublicSubnet = (props: any) =>
  <AwsPublicSubnet
    cidr_block='10.0.0.0/16'
    {...props}
  />

const PrivateSubnet = (props: any) =>
  <AwsPrivateSubnet
    cidr_block='10.10.0.0/16'
    {...props}
  />

const LoadBalancer = (props: any) => {
  const {awsSubnets} = useAwsSubnets()
  return (
    <AwsLb
      _dependsBy='Client'
      _dependsOn={['Firewall', 'Application']}
      subnets={awsSubnets.map((s) => s.id)}
      {...props}
    />
  )
}

const Firewall = (props: any) => <Waf
  {...props}
/>

const Application = (props: any) => {
  const {awsSubnet} = useAwsSubnet()
  return (
    <AwsInstance
      subnet_id={awsSubnet.id}
      ami='ami-005e54dee72cc1d00'
      _dependsOn='Postgres'
      {...props}
    />
  )
}

const Postgres = (props: any) => <AwsPostgres {...props} />

const Deno = (props: any) => <Shape {...props} />

const Docker = (props: any) => <Shape {...props} />

const ViteDev = (props: any) =>
  <Shape
    _image='https://vite.dev/logo.svg'
    _dependsBy='Client'
    _dependsOn='RdsPostgresqlInstance'
    {...props}
  />

const Local = (props: any) =>
  <GroupOnPremise {...props}>
    <Deno>
      <ViteDev />
    </Deno>
    <Docker>
      <RdsPostgresqlInstance>Postgres</RdsPostgresqlInstance>
    </Docker>
  </GroupOnPremise>

export function App() {
  return (
    <WebApp>
      <Client />
      {isLocal() ? <Local /> : <Cloud />}
    </WebApp>
  )
}
`,
    //options: web_5_data_spec.options,
    options: {
      diagramOptions: { dimension: { boxWidth: 60, boxHeight: 60 } },
      iacOptions: { provider: "opentofu" },
      stacks: { cloud: { stages: { backend: null, main: null } }, local: null },
    },
    App: web_5_data,
  },
  "diagram/ecs": {
    title: "diagram/ecs",
    slag: "diagram/ecs",
    packagePath: "diagram/ecs",
    outputPath: "./packages/examples/diagram/ecs/output",
    order: 1000,
    code: `import {
  Android,
  ApplicationLoadBalancer,
  Client as Client,
  ElasticacheForRedis,
  GroupAwsCloudAlt,
  GroupEc2InstanceContents,
  GroupRegion,
  GroupSecurityGroup,
  GroupVpc2,
  RdsPostgresqlInstance,
  Waf,
} from 'dinghy-components-generated-drawio'
import { type DiagramNodeProps, Shape } from 'dinghy-core'

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
    <GroupSecurityGroup
      _color='#7AA116'
      _background='#F2F6E8'
      {...props}
    />
  )
}

function PrivateSubnet(props: DiagramNodeProps) {
  return (
    <GroupSecurityGroup
      _color='#00A4A6'
      _background='#E6F6F7'
      {...props}
    />
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
  return (
    <Shape
      _display={'invisible'}
      {...props}
    />
  )
}

export function App() {
  return (
    <Stack title='Development Environment'>
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
                <ECSService _display='inactive'>migration</ECSService>
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
`,
    //options: diagram_ecs_spec.options,
    options: { diagramOptions: { dimension: { boxWidth: 60, boxHeight: 60 } } },
    App: diagram_ecs,
  },
  "diagram/layout/mindmap": {
    title: "diagram/layout/mindmap",
    slag: "diagram/layout/mindmap",
    packagePath: "diagram/layout/mindmap",
    outputPath: "./packages/examples/diagram/layout/mindmap/output",
    order: 1000,
    code: `import {
  Dependency,
  type DiagramNodeProps,
  Shape,
} from 'dinghy-core'
import { DrawioNodeTree, Point } from 'dinghy-provider-drawio'

const Mindmap = (props: DiagramNodeProps) => (
  <Shape _direction={'vertical'} {...props} />
)
const Row = (props: DiagramNodeProps) => (
  <Shape _display={'invisible'} {...props} />
)

const Column = (props: DiagramNodeProps) => (
  <Row _direction={'vertical'} {...props} />
)

const CenterMiddle = (props: DiagramNodeProps) => (
  <Shape
    _width={400}
    _height={600}
    _distribution={'even'}
    _display={'invisible'}
    {...props}
  />
)

const Dependencies = (props: DiagramNodeProps) => (
  <Dependency
    _dependsOn={[
      'T1',
      'T2',
      'T3',
      'B1',
      'B2',
      'B3',
      'B4',
      'L1',
      'L2',
      'L3',
      'R1',
      'R2',
      'R3',
      'R4',
    ]}
    _beforeGenerate={(
      {_props: {_diagram: {flags, points}}}: DrawioNodeTree,
    ) => {
      const {arrowDirection} = flags
      const space = 50
      let dimension: 'x' | 'y'
      let diff: number
      switch (arrowDirection) {
        case 'down':
          dimension = 'y'
          diff = space * 2
          break
        case 'up':
          dimension = 'y'
          diff = 0 - space * 2
          break
        case 'right':
          dimension = 'x'
          diff = space
          break
        case 'left':
          dimension = 'x'
          diff = 0 - space
          break
      }
      points.map((p: Point) => p[dimension] += diff)
    }}
    {...props}
  />
)

export function App() {
  return (
    <Mindmap>
      <Row>
        Top
        <Shape>T1</Shape>
        <Shape>T2</Shape>
        <Shape>T3</Shape>
      </Row>
      <Row>
        <Column>
          Left
          <Shape>L1</Shape>
          <Shape>L2</Shape>
          <Shape>L3</Shape>
        </Column>
        <CenterMiddle>
          <Shape>
            Center
            <Dependencies />
          </Shape>
        </CenterMiddle>
        <Column>
          Right
          <Shape _align='right'>R1</Shape>
          <Shape _align='left'>R2</Shape>
          <Shape _verticalAlign='top'>R3</Shape>
          <Shape _verticalAlign='bottom'>R4</Shape>
        </Column>
      </Row>
      <Row _display={'invisible'}>
        Bottom
        <Shape>B1</Shape>
        <Shape>B2</Shape>
        <Shape>B3</Shape>
        <Shape>B4</Shape>
      </Row>
    </Mindmap>
  )
}
`,
    //options: diagram_layout_mindmap_spec.options,
    options: { diagramOptions: { dimension: { boxWidth: 60, boxHeight: 60 } } },
    App: diagram_layout_mindmap,
  },
  "diagram/modules": {
    title: "diagram/modules",
    slag: "diagram/modules",
    packagePath: "diagram/modules",
    outputPath: "./packages/examples/diagram/modules/output",
    order: 1000,
    code: `import {
  Dependency,
  type DiagramNodeProps,
  Shape,
} from 'dinghy-core'

const Modules = (props: DiagramNodeProps) => (
  <Shape
    _title='Module / Package relationships'
    _direction={'vertical'}
    {...props}
  />
)
const Row = (props: DiagramNodeProps) => (
  <Shape _display={'invisible'} {...props} />
)

const Group = (props: DiagramNodeProps) => (
  <Shape
    _width={520}
    _distribution={'horizontal'}
    {...props}
  />
)

const VerticalGroup = (props: DiagramNodeProps) => (
  <Group
    _direction='vertical'
    {...props}
  />
)

const Renderers = (props: DiagramNodeProps) => (
  <Group
    _dependsOn={['BaseRenderer']}
    _dependsBy={['Clients']}
    {...props}
  />
)

const ProjectManagers = (props: DiagramNodeProps) => <Group {...props} />
const Clients = (props: DiagramNodeProps) => <Group {...props} />

const BaseComponents = (props: DiagramNodeProps) => <Group {...props} />
const BaseRenderer = (props: DiagramNodeProps) => <Group {...props} />

const StandardComponents = (props: DiagramNodeProps) => (
  <VerticalGroup
    _dependsOn={'BaseComponents'}
    {...props}
  />
)
const Examples = (props: DiagramNodeProps) => <VerticalGroup {...props} />

const Module = (props: DiagramNodeProps) => (
  <Shape
    _width={100}
    _height={30}
    {...props}
  />
)

const Package = Module

export function App() {
  return (
    <Modules>
      <Row>
        <Renderers>
          <Module>renderer-json</Module>
          <Module>renderer-drawio</Module>
          <Module>renderer-tf</Module>
        </Renderers>
        <ProjectManagers>
          <Module>
            runner
            <Dependency _dependsOn={'cli'} _display={'inactive'} />
          </Module>
          <Module _dependsOn={'runner'}>actions</Module>
        </ProjectManagers>
      </Row>
      <Row>
        <BaseRenderer>
          <Package>reconciler</Package>
        </BaseRenderer>
      </Row>
      <Row>
        <BaseComponents _dependsBy={['BaseRenderer', 'StandardComponents']}>
          <Package>types</Package>
          <Package _dependsOn={['types', 'contexts']}>components</Package>
          <Package>contexts</Package>
        </BaseComponents>
        <Clients>
          <Module>cli</Module>
          <Module>playground</Module>
          <Dependency _dependsOn={'Examples'} _display={'inactive'} />
        </Clients>
      </Row>
      <Row>
        <StandardComponents>
          <Module>standard-diagrams</Module>
          <Module>aws</Module>
        </StandardComponents>
        <Examples>
          <Module _dependsOn={'standard-diagrams'}>diagram</Module>
          <Module _dependsOn={'aws'}>iac</Module>
          <Module _dependsOn={'Standard Components'}>web</Module>
        </Examples>
      </Row>
    </Modules>
  )
}
`,
    //options: diagram_modules_spec.options,
    options: { diagramOptions: { dimension: { boxWidth: 60, boxHeight: 60 } } },
    App: diagram_modules,
  },
  "iac/cf-site": {
    title: "iac/cf-site",
    slag: "iac/cf-site",
    packagePath: "iac/cf-site",
    outputPath: "./packages/examples/iac/cf-site/output",
    order: 1000,
    code: `import {
  Dependency,
  type NodeProps,
  Shape,
  Stack,
} from 'dinghy-core'
import {
  AwsCloud,
  AwsRegion,
  DataAwsAcmCertificate,
  DataAwsRoute53Zone,
} from 'dinghy-components-generated-aws'
import { Client as Client } from 'dinghy-components-generated-drawio'
import {
  AwsBackend,
  LogBucket,
  S3CloudfrontSite,
  S3CloudfrontSiteInputProps,
} from 'dinghy-components-pro-aws'

const DinghyWebsite = (props: NodeProps) => (
  <Stack title='Dinghy Website' {...props} />
)

const GlobalRegion = (props: NodeProps) => (
  <AwsRegion
    _direction='vertical'
    {...props}
  />
)

const Shared = (props: NodeProps) => (
  <Shape
    _distribution='even'
    {...props}
  />
)

const Sites = (props: NodeProps) => (
  <Shape
    _dependsBy={'Client'}
    {...props}
  >
    <Dependency _dependsOn='logs' _display={'inactive'} />
    {props.children}
  </Shape>
)

const Site = (props: S3CloudfrontSiteInputProps) => (
  <Shape _display='invisible' _direction='vertical' _name={props.subdomain}>
    <S3CloudfrontSite
      bucketVersions={[
        'v1',
        //'v2',
      ]}
      {...props}
    />
  </Shape>
)

export function App() {
  return (
    <DinghyWebsite>
      <Client />
      <AwsCloud>
        <GlobalRegion>
          <Sites>
            <Site subdomain='WWW' />
            <Site subdomain='play' />
            <Site subdomain='cdn' />
          </Sites>
          <Shared>
            <DataAwsRoute53Zone name='dinghy.dev' />
            <DataAwsAcmCertificate domain='dinghy.dev' />
            <AwsBackend />
            <LogBucket surfix='logs' />
          </Shared>
        </GlobalRegion>
      </AwsCloud>
    </DinghyWebsite>
  )
}
`,
    //options: iac_cf_site_spec.options,
    options: {
      diagramOptions: { dimension: { boxWidth: 60, boxHeight: 60 } },
      iacOptions: { provider: "opentofu" },
    },
    App: iac_cf_site,
  },
  "iac/ecs": {
    title: "iac/ecs",
    slag: "iac/ecs",
    packagePath: "iac/ecs",
    outputPath: "./packages/examples/iac/ecs/output",
    order: 1000,
    code: `import { type DiagramNodeProps, Shape, Stack } from 'dinghy-core'
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
} from 'dinghy-components-generated-aws'
import { Client as Client } from 'dinghy-components-generated-drawio'

function LoadBalancer(props: AwsLbInputProps) {
  return <AwsLb {...props} />
}

function Redis(props: AwsElasticacheClusterProps) {
  return <AwsElasticacheCluster engine='redis' {...props} />
}

function StorageLayer(props: DiagramNodeProps) {
  return (
    <Shape
      _border={0}
      _color={{color: 'none', fill: true}}
      {...props}
    />
  )
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
              <AwsECSCluster
                _dependsOn={['Postgres', 'Redis']}
              >
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
`,
    //options: iac_ecs_spec.options,
    options: {
      diagramOptions: { dimension: { boxWidth: 60, boxHeight: 60 } },
      iacOptions: { provider: "opentofu" },
    },
    App: iac_ecs,
  },
};
