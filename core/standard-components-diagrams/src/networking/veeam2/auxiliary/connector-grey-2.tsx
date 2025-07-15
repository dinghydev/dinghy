import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONNECTOR_GREY_2 = {
  _style:
    'edgeStyle=none;rounded=0;html=1;entryX=0;entryY=0.5;jettySize=auto;orthogonalLoop=1;strokeColor=#D9D9D9;strokeWidth=2;fontColor=#000000;jumpStyle=none;endArrow=oval;endFill=1;startArrow=oval;startFill=1;',
  _width: 100,
  _height: 0,
}

export function ConnectorGrey2(props: DiagramNodeProps) {
  return <Dependency {...CONNECTOR_GREY_2} {...props} />
}
