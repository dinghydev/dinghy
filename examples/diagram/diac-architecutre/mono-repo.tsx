import { Dependency, Shape } from "@diac/base-components";

export function App() {
  return (
    <MonoRepo>
      <Core>
        <StandardComponents>
          <Module _width={200}>standard-components-diagrams</Module>
          <Module _width={200}>standard-components-tf-aws</Module>
        </StandardComponents>
        <Base>
          <Module _dependsBy={["StandardComponents", "base-renderer"]}>
            base-components
          </Module>
          <Module>base-renderer</Module>
        </Base>
        <Renderers>
          <Dependency _dependsOn="base-renderer" _wayPoint="elbow" />
          <Module>renderer-json</Module>
          <Module>renderer-drawio</Module>
          <Module>renderer-tf</Module>
        </Renderers>
      </Core>
      <Projects _distribution="even">
        <Project _dependsBy="cli" _dependsOn="StandardComponents">
          examples
        </Project>
        <Project>cli</Project>
        <Project _dependsBy="cli" _dependsOn="Renderers">engine</Project>
      </Projects>
    </MonoRepo>
  );
}

const MonoRepo = (props: any) => (
  <Shape
    _title="DIaC Mono Repo Projects"
    {...props}
  />
);

const Renderers = (props: any) => <Shape {...props} />;

const Base = (props: any) => <Shape _distribution="even" {...props} />;

const StandardComponents = (props: any) => <Shape {...props} />;

const Module = (props: any) => <Shape _width={100} _height={30} {...props} />;
const Project = (props: any) => <Shape _width={100} _height={90} {...props} />;

const Core = (props: any) => (
  <Shape
    _title="Core Project / Modules"
    _direction="vertical"
    {...props}
  />
);
const Projects = (props: any) => (
  <Shape
    _direction="vertical"
    {...props}
  />
);
