import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWIRL_13 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#AE4132;strokeColor=none;startAngle=0.5;endAngle=0.00001;arcWidth=0.23;shadow=0;fontSize=7;fontColor=#FFFFFF;align=left;',
  },
  _original_width: 6,
  _original_height: 215,
}

export function Swirl13(props: DiagramNodeProps) {
  return (
    <Shape {...SWIRL_13} {...props} _style={extendStyle(SWIRL_13, props)} />
  )
}
