import { Columns, Shape } from "@reactiac/base-components";
import {
  Activation,
  Message,
  Participant,
  SequenceDiagram,
} from "@reactiac/standard-components-diagrams/sequenceDiagram";

import {
  Client,
  Servers,
  User,
} from "@reactiac/standard-components-diagrams/awsGeneralResources";
export const renderOptions = {
  sequenceDiagrams: {
    message: [
      {
        from: "A",
        to: "B",
        message: "Hello",
      },
      {
        from: "B",
        to: "C",
        message: "World",
      },
    ],
  },
};

export function App() {
  return (
    <Shape _title=" ">
      <SequenceDiagram>
        <Columns>
          <Participant icon={User} lifelineHeight={400} />
          {/* <User _width={150} _height={50} /> */}
          {
            /* <Shape
              _width={50}
              _height={50}
              _diagram={{
                dimension: {
                  margin: {
                    bottom: 0,
                  },
                },
              }}
            /> */
          }
          {/* </Participant> */}
          <Activation
            _title="A1"
            _x={40}
            _y={150}
            _height={100}
          />
          <Activation
            _title="A2"
            _x={40}
            _y={300}
          />
        </Columns>
        <Columns>
          <Participant xicon={Client} lifelineHeight={400} />
          {/* <Shape _width={50} _height={50} _padding={{ xbottom: 30 }} /> */}
          {
            /* <Client
              _width={50}
              _height={50}
              _diagram={{
                dimension: {
                  margin: {
                    bottom: 0,
                  },
                },
              }}
            /> */
          }
          {/* </Participant> */}
          <Activation
            _title="A3"
            _x={40}
            _y={180}
          />
        </Columns>
        <Columns>
          <Participant xicon={Servers} lifelineHeight={400} title="Servers" />
          <Activation
            _title="A4"
            _x={40}
            _y={150}
          />
        </Columns>
        <Message _title="M1" from="A1" to="A3" _y={210} />
      </SequenceDiagram>
    </Shape>
  );
}
