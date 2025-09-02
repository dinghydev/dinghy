import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWIRL_10 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#10739E;strokeColor=none;startAngle=0;endAngle=0.5;arcWidth=0.23;shadow=0;fontSize=7;fontColor=#FFFFFF;align=left;',
  },
  _original_width: 3,
  _original_height: 215,
}

export function Swirl10(props: DiagramNodeProps) {
  return (
    <Shape {...SWIRL_10} {...props} _style={extendStyle(SWIRL_10, props)} />
  )
}
