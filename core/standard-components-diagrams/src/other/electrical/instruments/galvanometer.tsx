import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GALVANOMETER = {
  _style:
    'perimeter=ellipsePerimeter;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.instruments.galvanometer;',
  _width: 90,
  _height: 90,
}

export function Galvanometer(props: DiagramNodeProps) {
  return <Shape {...GALVANOMETER} {...props} />
}
