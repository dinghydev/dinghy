import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARC_LIST_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#F2931E;strokeColor=#ffffff;startAngle=0.91;endAngle=0.17;arcWidth=0.18;strokeWidth=3;',
  },
  _original_width: 1,
  _original_height: 200,
}

export function ArcList2(props: DiagramNodeProps) {
  return (
    <Shape {...ARC_LIST_2} {...props} _style={extendStyle(ARC_LIST_2, props)} />
  )
}
