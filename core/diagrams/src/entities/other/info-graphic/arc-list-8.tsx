import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARC_LIST_8 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.arc;fillColor=none;strokeColor=#10739E;startAngle=0.75;endAngle=0.08;strokeWidth=16;',
  },
  _width: 5,
  _height: 200,
}

export function ArcList8(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARC_LIST_8)} />
}
