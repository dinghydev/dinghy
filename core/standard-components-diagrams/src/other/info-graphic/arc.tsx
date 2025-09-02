import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.arc;strokeColor=#10739E;strokeWidth=6;startAngle=0.3;endAngle=0.1;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Arc(props: DiagramNodeProps) {
  return <Shape {...ARC} {...props} _style={extendStyle(ARC, props)} />
}
