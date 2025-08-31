import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NEXUS_4K = {
  _style: {
    entity:
      'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=nexus_4k;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _width: 60,
  _height: 60,
}

export function Nexus4k(props: DiagramNodeProps) {
  return (
    <Shape {...NEXUS_4K} {...props} _style={extendStyle(NEXUS_4K, props)} />
  )
}
