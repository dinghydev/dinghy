import { Shape } from "@reactiac/base-components";

export function App() {
  return (
    <ReactIAC>
      <Folder _dependsBy={["engine", "examples"]}>core</Folder>
      <Row _id="second">
        <Folder>engine</Folder>
        <Folder>docker</Folder>
        <Folder>examples</Folder>
      </Row>
      <Row _id="third">
        <Folder _dependsOn="engine">cli</Folder>
        <Folder
          _dependsOn={["cli", "docker"]}
          _dependsBy={[".github"]}
        >
          tasks
        </Folder>
        <Folder>.github</Folder>
      </Row>
    </ReactIAC>
  );
}

const ReactIAC = (props: any) => (
  <Shape
    _title="ReactIAC Top Level Folder Structure"
    _direction={"vertical"}
    {...props}
  />
);
const Folder = (props: any) => (
  <Shape
    _mxGraphModel='<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" value="abc" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=middle;verticalAlign=middle;align=center;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.folder;html=1;labelPosition=center;" vertex="1" parent="1"><mxGeometry x="200" y="241.2" width="90" height="81.92" as="geometry"/></mxCell></root></mxGraphModel>'
    {...props}
  />
);
const Row = (props: any) => <Shape _display={"invisible"} {...props} />;
