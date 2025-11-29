import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SWIRL_11 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#F2931E;strokeColor=none;startAngle=0;endAngle=0.5;arcWidth=0.3;shadow=0;fontSize=7;fontColor=#FFFFFF;align=left;',
  },
  _width: 4,
  _height: 215,
}

export function Swirl11(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SWIRL_11)} />
}
