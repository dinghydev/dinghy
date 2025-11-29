import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_HORIZONTAL_5 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;startAngle=0.25;endAngle=0.75;arcWidth=0.25;fillColor=#15AA96;strokeColor=none;',
  },
  _width: 4,
  _height: 300,
}

export function RoadmapHorizontal5(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROADMAP_HORIZONTAL_5)} />
}
