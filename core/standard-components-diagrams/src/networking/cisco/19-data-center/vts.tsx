import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VTS = {
  _style: {
    entity:
      'sketch=0;points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.145,0.145,0],[0.8555,0.145,0],[0.855,0.8555,0],[0.145,0.855,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.vts;fillColor=#005073;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Vts(props: DiagramNodeProps) {
  return <Shape {...VTS} {...props} _style={extendStyle(VTS, props)} />
}
