import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DUAL_MODE_ACCESS_POINT = {
  _style:
    'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=dual_mode_access_point;fillColor=#FAFAFA;strokeColor=#005073;',
  _width: 64,
  _height: 50,
}

export function DualModeAccessPoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...DUAL_MODE_ACCESS_POINT}
      {...props}
      _style={extendStyle(DUAL_MODE_ACCESS_POINT, props)}
    />
  )
}
