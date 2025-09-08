import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SWIRL_12 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#AE4132;strokeColor=none;startAngle=0;endAngle=0.5;arcWidth=0.43;shadow=0;fontSize=7;fontColor=#FFFFFF;align=left;',
  },
  _original_width: 5,
  _original_height: 215,
}

export function Swirl12(props: DiagramNodeProps) {
  return (
    <Shape {...SWIRL_12} {...props} _style={extendStyle(SWIRL_12, props)} />
  )
}
