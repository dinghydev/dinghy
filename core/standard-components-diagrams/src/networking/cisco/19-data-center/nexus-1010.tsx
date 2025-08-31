import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NEXUS_1010 = {
  _style:
    'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=nexus_1010;fillColor=#FAFAFA;strokeColor=#005073;',
  _width: 64,
  _height: 50,
}

export function Nexus1010(props: DiagramNodeProps) {
  return (
    <Shape {...NEXUS_1010} {...props} _style={extendStyle(NEXUS_1010, props)} />
  )
}
