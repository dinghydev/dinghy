import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARC_LIST_4 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#12AAB5;strokeColor=#ffffff;startAngle=0.02;endAngle=0.25;arcWidth=0.29;strokeWidth=3;',
  },
  _original_width: 3,
  _original_height: 200,
}

export function ArcList4(props: DiagramNodeProps) {
  return (
    <Shape {...ARC_LIST_4} {...props} _style={extendStyle(ARC_LIST_4, props)} />
  )
}
