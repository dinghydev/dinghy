import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURE_ENDPOINT_PC = {
  _style:
    'points=[[0.02,0.015,0],[0.5,0,0],[0.98,0.015,0],[1,0.38,0],[0.895,0.98,0],[0.5,1,0],[0.105,0.98,0],[0,0.38,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.secure_endpoint_pc;fillColor=#005073;strokeColor=none;',
  _width: 50,
  _height: 40,
}

export function SecureEndpointPc(props: DiagramNodeProps) {
  return <Shape {...SECURE_ENDPOINT_PC} {...props} />
}
