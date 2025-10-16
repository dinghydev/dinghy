import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARC_LIST_6 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.basic.pie;fillColor=#23445D;strokeColor=#ffffff;startAngle=0.75;endAngle=0.25;fontSize=16;fontColor=#FFFFFF;verticalAlign=top;fontStyle=1;strokeWidth=3;',
  },
  _width: 5,
  _height: 200,
}

export function ArcList6(props: DiagramNodeProps) {
  return (
    <Shape {...ARC_LIST_6} {...props} _style={extendStyle(ARC_LIST_6, props)} />
  )
}
