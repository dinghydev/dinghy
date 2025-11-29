import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARC_LIST = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#10739E;strokeColor=#ffffff;startAngle=0.75;endAngle=0.08;arcWidth=0.16;strokeWidth=3;',
  },
  _width: 0,
  _height: 200,
}

export function ArcList(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARC_LIST)} />
}
