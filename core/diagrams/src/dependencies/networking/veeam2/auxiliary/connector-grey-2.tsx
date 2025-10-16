import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONNECTOR_GREY_2 = {
  _style: {
    dependency:
      'edgeStyle=none;rounded=0;html=1;entryX=0;entryY=0.5;jettySize=auto;orthogonalLoop=1;strokeColor=#D9D9D9;strokeWidth=2;fontColor=#000000;jumpStyle=none;endArrow=oval;endFill=1;startArrow=oval;startFill=1;',
  },
}

export function ConnectorGrey2(props: DiagramNodeProps) {
  return (
    <Dependency
      {...CONNECTOR_GREY_2}
      {...props}
      _style={extendStyle(CONNECTOR_GREY_2, props)}
    />
  )
}
