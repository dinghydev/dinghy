import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCK = {
  _style:
    'sketch=0;points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.145,0.145,0],[0.8555,0.145,0],[0.855,0.8555,0],[0.145,0.855,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.lock;fillColor=#005073;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Lock(props: DiagramNodeProps) {
  return <Shape {...LOCK} {...props} _style={extendStyle(LOCK, props)} />
}
