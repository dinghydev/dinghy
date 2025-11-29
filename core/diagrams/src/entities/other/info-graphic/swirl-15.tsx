import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SWIRL_15 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#10739E;strokeColor=none;startAngle=0.5;endAngle=0.00001;arcWidth=0.43;shadow=0;fontSize=7;fontColor=#FFFFFF;align=left;',
  },
  _width: 8,
  _height: 215,
}

export function Swirl15(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SWIRL_15)} />
}
