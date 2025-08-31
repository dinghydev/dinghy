import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OSCILLOSCOPE = {
  _style: {
    entity:
      'perimeter=ellipsePerimeter;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.instruments.oscilloscope;',
  },
  _width: 60,
  _height: 60,
}

export function Oscilloscope(props: DiagramNodeProps) {
  return (
    <Shape
      {...OSCILLOSCOPE}
      {...props}
      _style={extendStyle(OSCILLOSCOPE, props)}
    />
  )
}
