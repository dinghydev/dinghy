import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARC_LIST_3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#AE4132;strokeColor=#ffffff;startAngle=0.75;endAngle=0.11;arcWidth=0.22;strokeWidth=3;',
  },
  _width: 2,
  _height: 200,
}

export function ArcList3(props: DiagramNodeProps) {
  return (
    <Shape {...ARC_LIST_3} {...props} _style={extendStyle(ARC_LIST_3, props)} />
  )
}
