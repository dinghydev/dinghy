import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLAG = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.flag;dx=30;dy=20;fillColor=#10739E;strokeColor=none;align=center;verticalAlign=top;fontColor=#ffffff;fontSize=14;fontStyle=1;shadow=0;spacingTop=5;',
  },
  _width: 200,
  _height: 70,
}

export function Flag(props: DiagramNodeProps) {
  return <Shape {...FLAG} {...props} _style={extendStyle(FLAG, props)} />
}
