import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACCESS_POINT = {
  _style:
    'shape=mxgraph.cisco.misc.access_point;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 75,
  _height: 34,
}

export function AccessPoint(props: DiagramNodeProps) {
  return <Shape {...ACCESS_POINT} {...props} />
}
