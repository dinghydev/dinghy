import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARC_LIST_10 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.arc;fillColor=none;strokeColor=#AE4132;startAngle=0.75;endAngle=0.11;strokeWidth=16;',
  },
  _original_width: 7,
  _original_height: 200,
}

export function ArcList10(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARC_LIST_10}
      {...props}
      _style={extendStyle(ARC_LIST_10, props)}
    />
  )
}
