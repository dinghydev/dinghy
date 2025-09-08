import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONNECTOR_2_TOPAZ = {
  _style: {
    dependency:
      'edgeStyle=none;rounded=0;html=1;entryX=0;entryY=0.5;jettySize=auto;orthogonalLoop=1;strokeColor=#00B336;strokeWidth=2;fontColor=#000000;jumpStyle=none;endArrow=oval;endFill=1;startArrow=oval;startFill=1;',
  },
}

export function Connector2Topaz(props: DiagramNodeProps) {
  return (
    <Dependency
      {...CONNECTOR_2_TOPAZ}
      {...props}
      _style={extendStyle(CONNECTOR_2_TOPAZ, props)}
    />
  )
}
