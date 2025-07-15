import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OSCILLOSCOPE = {
  _style:
    'perimeter=ellipsePerimeter;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.instruments.oscilloscope;',
  _width: 90,
  _height: 90,
}

export function Oscilloscope(props: DiagramNodeProps) {
  return <Shape {...OSCILLOSCOPE} {...props} />
}
