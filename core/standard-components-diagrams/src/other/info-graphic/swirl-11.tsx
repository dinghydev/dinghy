import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWIRL_11 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#F2931E;strokeColor=none;startAngle=0;endAngle=0.5;arcWidth=0.3;shadow=0;fontSize=7;fontColor=#FFFFFF;align=left;',
  _width: 4,
  _height: 215,
}

export function Swirl11(props: DiagramNodeProps) {
  return (
    <Shape {...SWIRL_11} {...props} _style={extendStyle(SWIRL_11, props)} />
  )
}
