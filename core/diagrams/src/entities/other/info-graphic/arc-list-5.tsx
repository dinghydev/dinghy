import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARC_LIST_5 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#CCCCCC;strokeColor=#ffffff;startAngle=0.75;endAngle=0.25;arcWidth=0.4;strokeWidth=3;',
  },
  _width: 4,
  _height: 200,
}

export function ArcList5(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARC_LIST_5)} />
}
