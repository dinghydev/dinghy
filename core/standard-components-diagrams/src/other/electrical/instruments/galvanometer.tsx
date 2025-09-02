import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GALVANOMETER = {
  _style: {
    entity:
      'perimeter=ellipsePerimeter;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.instruments.galvanometer;',
  },
  _original_width: 90,
  _original_height: 90,
}

export function Galvanometer(props: DiagramNodeProps) {
  return (
    <Shape
      {...GALVANOMETER}
      {...props}
      _style={extendStyle(GALVANOMETER, props)}
    />
  )
}
