import {
  Dependency,
  type DiagramNodeProps,
  Shape,
} from '../../../core/index.js'

const Modules = (props: DiagramNodeProps) => (
  <Shape
    _title="Module / Package relationships"
    _direction={'vertical'}
    {...props}
  />
)
const Row = (props: DiagramNodeProps) => (
  <Shape _display={'invisible'} {...props} />
)

const Group = (props: DiagramNodeProps) => (
  <Shape _width={520} _distribution={'horizontal'} {...props} />
)

const VerticalGroup = (props: DiagramNodeProps) => (
  <Group _direction="vertical" {...props} />
)

const Renderers = (props: DiagramNodeProps) => (
  <Group _dependsOn={['BaseRenderer']} _dependsBy={['Clients']} {...props} />
)

const ProjectManagers = (props: DiagramNodeProps) => <Group {...props} />
const Clients = (props: DiagramNodeProps) => <Group {...props} />

const BaseComponents = (props: DiagramNodeProps) => <Group {...props} />
const BaseRenderer = (props: DiagramNodeProps) => <Group {...props} />

const StandardComponents = (props: DiagramNodeProps) => (
  <VerticalGroup _dependsOn={'BaseComponents'} {...props} />
)
const Examples = (props: DiagramNodeProps) => <VerticalGroup {...props} />

const Module = (props: DiagramNodeProps) => (
  <Shape _width={100} _height={30} {...props} />
)

const Package = Module

export default function App() {
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
          <Module>standard-components-aws</Module>
        </StandardComponents>
        <Examples>
          <Module _dependsOn={'standard-diagrams'}>diagram</Module>
          <Module _dependsOn={'standard-components-aws'}>iac</Module>
          <Module _dependsOn={'Standard Components'}>web</Module>
        </Examples>
      </Row>
    </Modules>
  )
}
