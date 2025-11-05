import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SWIRL_13 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#AE4132;strokeColor=none;startAngle=0.5;endAngle=0.00001;arcWidth=0.23;shadow=0;fontSize=7;fontColor=#FFFFFF;align=left;',
  },
  _width: 6,
  _height: 215,
}

export function Swirl13(props: NodeProps) {
  return (
    <Shape {...SWIRL_13} {...props} _style={extendStyle(SWIRL_13, props)} />
  )
}
