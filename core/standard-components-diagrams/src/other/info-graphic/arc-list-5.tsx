import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARC_LIST_5 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#CCCCCC;strokeColor=#ffffff;startAngle=0.75;endAngle=0.25;arcWidth=0.4;strokeWidth=3;',
  _width: 4,
  _height: 200,
}

export function ArcList5(props: DiagramNodeProps) {
  return (
    <Shape {...ARC_LIST_5} {...props} _style={extendStyle(ARC_LIST_5, props)} />
  )
}
