import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VBOND = {
  _style:
    'sketch=0;points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.145,0.145,0],[0.8555,0.145,0],[0.855,0.8555,0],[0.145,0.855,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=vbond;fillColor=#FAFAFA;strokeColor=#005073;',
  _width: 50,
  _height: 50,
}

export function Vbond(props: DiagramNodeProps) {
  return <Shape {...VBOND} {...props} />
}
