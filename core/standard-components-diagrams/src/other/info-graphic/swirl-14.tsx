import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWIRL_14 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#F2931E;strokeColor=none;startAngle=0.5;endAngle=0.00001;arcWidth=0.3;shadow=0;fontSize=7;fontColor=#FFFFFF;align=left;',
  _width: 7,
  _height: 215,
}

export function Swirl14(props: DiagramNodeProps) {
  return (
    <Shape {...SWIRL_14} {...props} _style={extendStyle(SWIRL_14, props)} />
  )
}
