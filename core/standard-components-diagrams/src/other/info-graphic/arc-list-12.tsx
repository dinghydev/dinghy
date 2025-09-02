import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARC_LIST_12 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.arc;fillColor=none;strokeColor=#CCCCCC;startAngle=0.75;endAngle=0.25;strokeWidth=16;',
  },
  _original_width: 9,
  _original_height: 200,
}

export function ArcList12(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARC_LIST_12}
      {...props}
      _style={extendStyle(ARC_LIST_12, props)}
    />
  )
}
