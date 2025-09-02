import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PIE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.pie;fillColor=#10739E;strokeColor=none;startAngle=0.2;endAngle=0.9;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Pie(props: DiagramNodeProps) {
  return <Shape {...PIE} {...props} _style={extendStyle(PIE, props)} />
}
