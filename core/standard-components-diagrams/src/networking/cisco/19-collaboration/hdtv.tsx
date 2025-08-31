import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HDTV = {
  _style:
    'points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[1,0.4,0],[1,0.8,0],[0.815,1,0],[0.5,1,0],[0.185,1,0],[0,0.8,0],[0,0.4,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.hdtv;fillColor=#005073;strokeColor=none;',
  _width: 60,
  _height: 50,
}

export function Hdtv(props: DiagramNodeProps) {
  return <Shape {...HDTV} {...props} _style={extendStyle(HDTV, props)} />
}
