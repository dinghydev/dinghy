#!/usr/bin/env -S dinghy diagram
import { Shape } from "@dinghy/base-components";
import * as uml from "@dinghy/diagrams/entitiesUml";

export default function App() {
  return (
    <DinghyArchitecture>
      <CoreModules>
        <StandardComponents>
          <Module _width={200}>diagrams</Module>
          <Module _width={200}>tf-aws</Module>
        </StandardComponents>
        <Base>
          <Module _dependsBy={["StandardComponents", "base-renderer"]}>
            base-components
          </Module>
          <Module>base-renderer</Module>
        </Base>
        <Renderers _dependsOn="base-renderer">
          <Module>renderer-json</Module>
          <Module>renderer-drawio</Module>
          <Module>renderer-tf</Module>
        </Renderers>
      </CoreModules>
      <Projects _distribution="even">
        <Project _dependsBy="cli" _dependsOn="StandardComponents">
          project / examples
        </Project>
        <Project>cli</Project>
        <Project _dependsBy="cli" _dependsOn="Renderers">engine</Project>
      </Projects>
    </DinghyArchitecture>
  );
}

const DinghyArchitecture = (props: any) => (
  <Shape
    {...props}
  />
);

const Renderers = (props: any) => <Shape {...props} />;

const Base = (props: any) => <Shape _distribution="even" {...props} />;

const StandardComponents = (props: any) => <Shape {...props} />;

const Module = (props: any) => (
  <uml.Module
    _width={130}
    {...props}
    _style={{
      verticalAlign: "middle",
    }}
  />
);
const Project = (props: any) => <Shape _width={120} _height={60} {...props} />;

const CoreModules = (props: any) => (
  <Shape
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
