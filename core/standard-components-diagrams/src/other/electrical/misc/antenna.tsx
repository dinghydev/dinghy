import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANTENNA = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.aerial_-_antenna_1;',
  _width: 80,
  _height: 100,
}

export function Antenna(props: DiagramNodeProps) {
  return <Shape {...ANTENNA} {...props} />
}
