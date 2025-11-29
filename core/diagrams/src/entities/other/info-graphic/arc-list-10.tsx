import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARC_LIST_10 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.arc;fillColor=none;strokeColor=#AE4132;startAngle=0.75;endAngle=0.11;strokeWidth=16;',
  },
  _width: 7,
  _height: 200,
}

export function ArcList10(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARC_LIST_10)} />
}
