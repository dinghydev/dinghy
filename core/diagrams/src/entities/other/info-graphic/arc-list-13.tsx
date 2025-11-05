import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARC_LIST_13 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.basic.pie;fillColor=#23445D;strokeColor=none;startAngle=0.75;endAngle=0.25;fontSize=16;fontColor=#FFFFFF;verticalAlign=top;spacingTop=8;fontStyle=1;',
  },
  _width: 10,
  _height: 200,
}

export function ArcList13(props: NodeProps) {
  return (
    <Shape
      {...ARC_LIST_13}
      {...props}
      _style={extendStyle(ARC_LIST_13, props)}
    />
  )
}
