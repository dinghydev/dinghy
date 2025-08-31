import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CIRCULAR_DIAL_2 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.donut;dx=10;strokeColor=none;fillColor=#10739E;fontSize=10;align=center;fillOpacity=20;',
  _width: 0,
  _height: 100,
}

export function CircularDial2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_2}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_2, props)}
    />
  )
}
