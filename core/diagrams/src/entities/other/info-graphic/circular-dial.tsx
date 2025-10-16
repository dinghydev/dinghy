import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CIRCULAR_DIAL = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=bottom;html=1;shape=mxgraph.infographic.circularDial;dy=15;fillColor=#10739E;strokeColor=none;labelPosition=center;align=center;fontStyle=1;fontSize=15;spacingBottom=5;whiteSpace=wrap;',
  },
  _width: 80,
  _height: 110.00000000000001,
}

export function CircularDial(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL, props)}
    />
  )
}
