import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANTENNA = {
  _style:
    'shape=mxgraph.cisco.wireless.antenna;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 88,
  _height: 104,
}

export function Antenna(props: DiagramNodeProps) {
  return <Shape {...ANTENNA} {...props} />
}
